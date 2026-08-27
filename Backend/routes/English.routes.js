import express from "express";

import {
  getAllEnglishTopicsController,
  getEnglishTopicController,
  syncEnglishTopicsController,
} from "../Controllers/English.controller.js";

const router = express.Router();


router.get(
  "/",
  getAllEnglishTopicsController
);


router.get(
  "/:slug",
  getEnglishTopicController
);


router.post(
  "/sync",
  syncEnglishTopicsController
);


export default router;