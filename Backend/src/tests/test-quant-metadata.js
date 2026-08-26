
import { syncQuantMetadata } from "../../services/quantMetadata.service.js";
try {
  await syncQuantMetadata();
  process.exit(0);
} catch (error) {
  console.error("❌ Metadata sync failed");
  console.error(error);
  process.exit(1);
}