
import { listQuantFiles,getFileContent } from "../src/Config/gcs.js";
import {parseQuantMarkdown} from "../src/Parsers/quant.parser.js"
import prisma from "../src/Config/prisma.js";

export async function syncQuantMetadata() {
  const files = await listQuantFiles();

  console.log(`📚 Found ${files.length} quant files`);

  let count = 0;

  for (const filePath of files) {
    try {
      const content = await getFileContent(filePath);

      const parsed = parseQuantMarkdown(content);

      const topic = parsed.frontmatter?.topic;

      if (!topic) {
        console.warn(`⚠️ Skipping ${filePath}: topic missing`);
        continue;
      }

      const slug = filePath
        .replace(/^quants\//, "")
        .replace(/\.md$/, "");

      const saved = await prisma.quantTopic.upsert({
  where: {
    slug
  },

  update: {
    name: topic,
    domain: parsed.frontmatter?.domain ?? "quantitative_aptitude",
    difficulty: parsed.frontmatter?.difficulty ?? null,
    filePath
  },

  create: {
    slug,
    name: topic,
    domain: parsed.frontmatter?.domain ?? "quantitative_aptitude",
    difficulty: parsed.frontmatter?.difficulty ?? null,
    filePath
  }
});

      console.log(`✅ ${saved.name} → saved`);
      count++;

    } catch (error) {
      console.error(`❌ Failed: ${filePath}`);
      console.error(error.message);
    }
  }

  console.log(`\n🎉 Metadata sync completed: ${count} topics`);
}