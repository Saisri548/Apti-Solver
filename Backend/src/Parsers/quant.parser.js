/**
 * Parse a Quantitative Aptitude Markdown file.
 *
 * Expected structure:
 *
 * ---
 * topic: Percentages
 * domain: quantitative_aptitude
 * difficulty: beginner_to_advanced
 * ---
 *
 * # Percentages
 *
 * ## 1. Concept
 * ...
 *
 * ## 2. Important Formulas
 * ...
 */

export function parseQuantMarkdown(markdown) {
  if (!markdown || typeof markdown !== "string") {
    throw new Error("Markdown content must be a non-empty string");
  }

  const frontmatter = parseFrontmatter(markdown);

  // Remove frontmatter before processing sections
  const body = removeFrontmatter(markdown).trim();

  const title = extractTitle(body);

  const sections = parseSections(body);

  return {
    frontmatter,
    title,
    sections,
  };
}

/**
 * Extract YAML-like frontmatter.
 */
function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---/);

  if (!match) {
    throw new Error("Frontmatter not found");
  }

  const frontmatter = {};

  const lines = match[1].split("\n");

  for (const line of lines) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line
      .slice(0, separatorIndex)
      .trim();

    const value = line
      .slice(separatorIndex + 1)
      .trim();

    frontmatter[key] = value;
  }

  return frontmatter;
}

/**
 * Remove frontmatter from Markdown.
 */
function removeFrontmatter(markdown) {
  return markdown.replace(
    /^---\s*\n[\s\S]*?\n---\s*/,
    ""
  );
}

/**
 * Extract the main # title.
 */
function extractTitle(body) {
  const match = body.match(/^#\s+(.+)$/m);

  if (!match) {
    throw new Error("Main title not found");
  }

  return match[1].trim();
}

/**
 * Extract ## sections.
 */
function parseSections(body) {
  const sectionRegex = /^##\s+(.+)$/gm;

  const matches = [...body.matchAll(sectionRegex)];

  const sections = [];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];

    const title = match[1].trim();

    const start = match.index + match[0].length;

    const end =
      i + 1 < matches.length
        ? matches[i + 1].index
        : body.length;

    const content = body
      .slice(start, end)
      .trim();

    sections.push({
      title,
      content,
    });
  }

  return sections;
}