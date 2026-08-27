import {
  getAllEnglishTopics,
  getEnglishTopicBySlug,
  syncEnglishTopics,
} from "../services/english.service.js";


export async function getAllEnglishTopicsController(req, res) {
  try {
    const topics = await getAllEnglishTopics();

    res.status(200).json({
      success: true,
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error("Get English topics error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch English topics",
    });
  }
}


export async function getEnglishTopicController(req, res) {
  try {
    const { slug } = req.params;

    const topic = await getEnglishTopicBySlug(slug);

    res.status(200).json({
      success: true,
      topic,
    });
  } catch (error) {
    console.error("Get English topic error:", error);

    res.status(error.statusCode || 500).json({
      success: false,
      message:
        error.message || "Failed to fetch English topic",
    });
  }
}


export async function syncEnglishTopicsController(req, res) {
  try {
    const topics = await syncEnglishTopics();

    res.status(200).json({
      success: true,
      message: "English topics synchronized successfully",
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error("Sync English topics error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to synchronize English topics",
      error: error.message,
    });
  }
}