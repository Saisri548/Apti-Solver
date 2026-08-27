import prisma from "../src/Config/Prisma.js";

import {
  listEnglishFiles,
  getFileContent,
} from "../src/Config/gcs.js";

import { parseEnglishTopic } from "../src/Parsers/English.parser.js";


function createSlug(topic) {
  return topic
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}


/**
 * Get all English topics from database
 */
export async function getAllEnglishTopics() {
  return await prisma.englishTopic.findMany({
    orderBy: {
      id: "asc",
    },
  });
}


/**
 * Get one English topic by slug
 */
export async function getEnglishTopicBySlug(slug) {
  const topic = await prisma.englishTopic.findUnique({
    where: {
      slug,
    },
  });

  if (!topic) {
    const error = new Error("English topic not found");
    error.statusCode = 404;
    throw error;
  }

  const content = await getFileContent(topic.filePath);

  const parsedTopic = parseEnglishTopic(content);

  return {
    ...topic,
    content,
    parsed: parsedTopic,
  };
}


/**
 * Sync English Markdown files from GCS → PostgreSQL
 */
export async function syncEnglishTopics() {
  const files = await listEnglishFiles();

  const topics = [];

  for (const filePath of files) {
    const content = await getFileContent(filePath);

    const parsed = parseEnglishTopic(content);

    const slug = createSlug(parsed.topic);

    const topic = await prisma.englishTopic.upsert({
      where: {
        slug,
      },
      update: {
        name: parsed.topic,
        domain: parsed.domain,
        difficulty: parsed.difficulty,
        filePath,
      },
      create: {
        slug,
        name: parsed.topic,
        domain: parsed.domain,
        difficulty: parsed.difficulty,
        filePath,
      },
    });

    topics.push(topic);
  }

  return topics;
}