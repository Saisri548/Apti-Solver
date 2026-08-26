import express from "express";
import { getTopics } from "../Controllers/quant.controller.js";
import { getTopicContent } from "../Controllers/quant.controller.js";
const router = express.Router();

router.get("/", getTopics);
router.get("/:slug", getTopicContent);
export default router;