export function parseEnglishTopic(content) {
  const frontMatterMatch = content.match(
    /^---\s*([\s\S]*?)\s*---/
  );

  if (!frontMatterMatch) {
    throw new Error("English topic front matter not found");
  }

  const frontMatter = frontMatterMatch[1];

  const topicMatch = frontMatter.match(/^topic:\s*(.+)$/m);
  const domainMatch = frontMatter.match(/^domain:\s*(.+)$/m);
  const difficultyMatch = frontMatter.match(/^difficulty:\s*(.+)$/m);

  if (!topicMatch) {
    throw new Error("topic not found in English markdown");
  }

  return {
    topic: topicMatch[1].trim(),
    domain: domainMatch?.[1]?.trim() || "english",
    difficulty: difficultyMatch?.[1]?.trim() || null,
  };
}