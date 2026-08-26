import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { parseQuantMarkdown } from "../Parsers/quant.parser.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust this path according to where your test file is
const filePath = path.resolve(
  __dirname,
  "../../test-data/averages.md"
);

const markdown = fs.readFileSync(filePath, "utf-8");

const result = parseQuantMarkdown(markdown);

console.log(JSON.stringify(result, null, 2));