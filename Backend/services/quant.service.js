import { bucket } from "../src/Config/gcs.js";

const QUANTS_PREFIX = process.env.GCS_QUANTS_PREFIX || "quants/";

export const getQuantTopics = async () => {
  const [files] = await bucket.getFiles({
    prefix: QUANTS_PREFIX,
  });

  const topics = files
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => {
      const slug = file.name
        .replace(QUANTS_PREFIX, "")
        .replace(".md", "");

      return {
        name: formatTopicName(slug),
        slug,
        file: file.name,
      };
    });

  return topics;
};

const formatTopicName = (slug) => {
  return slug
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
export const getQuantContent = async (slug) => {
  const filePath = `${QUANTS_PREFIX}${slug}.md`;

  const file = bucket.file(filePath);

  const [exists] = await file.exists();

  if (!exists) {
    throw new Error(`Quant topic '${slug}' not found`);
  }

  const [content] = await file.download();

  return {
    slug,
    file: filePath,
    content: content.toString("utf-8"),
  };
};