import "dotenv/config";
import { bucket } from "./Config/gcs.js";

async function testGCS() {
  try {
    const [exists] = await bucket.exists();

    if (!exists) {
      console.log("❌ Bucket not found or access denied");
      return;
    }

    console.log("✅ GCS connection successful!");
    console.log("Bucket:", bucket.name);

    const [files] = await bucket.getFiles();

    console.log("\nFiles in bucket:");

    if (files.length === 0) {
      console.log("No files found.");
    } else {
      files.forEach((file) => {
        console.log(" -", file.name);
      });
    }
  } catch (error) {
    console.error("❌ GCS connection failed");
    console.error(error.message);
  }
}

testGCS();