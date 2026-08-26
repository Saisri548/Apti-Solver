import { getQuantTopics } from "../services/quant.service.js";
import { getQuantContent } from "../services/quant.service.js";
export const getTopics = async (req, res) => {
  try {
    const topics = await getQuantTopics();

    res.status(200).json({
      success: true,
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error("Failed to fetch quant topics:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch quant topics",
      error: error.message,
    });
  }
};
export const getTopicContent = async (req, res) => {
  try {
    const { slug } = req.params;

    const topic = await getQuantContent(slug);

    res.status(200).json({
      success: true,
      topic,
    });
  } catch (error) {
    console.error("Failed to fetch quant content:", error);

    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

