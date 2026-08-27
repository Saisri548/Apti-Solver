import dotenv from "dotenv";
import { Storage } from "@google-cloud/storage";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// backend/.env
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const bucketName = process.env.GCS_BUCKET_NAME;

console.log("GCS Bucket:", bucketName);

if (!bucketName) {
  throw new Error("GCS_BUCKET_NAME is not defined");
}

const keyFilename = path.resolve(
  __dirname,
  "../../secrets/gcp-service-account.json"
);

const storage = new Storage({
  keyFilename,
});

const bucket = storage.bucket(bucketName);

/**
 * Get all Markdown files inside quants/
 */
async function listQuantFiles() {
  const [files] = await bucket.getFiles({
    prefix: "quants/",
  });

  return files
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => file.name);
}

/**
 * Get all Markdown files inside english/
 */
async function listEnglishFiles() {
  const [files] = await bucket.getFiles({
    prefix: "English/",
  });

  return files
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => file.name);
}

/**
 * Get the content of a file from GCS
 */
async function getFileContent(filePath) {
  const file = bucket.file(filePath);

  const [buffer] = await file.download();

  return buffer.toString("utf-8");
}

export {
  storage,
  bucket,
  listQuantFiles,
  listEnglishFiles,
  getFileContent,
};