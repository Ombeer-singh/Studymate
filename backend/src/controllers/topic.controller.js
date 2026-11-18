const Topic = require("../models/topic.model");

// Get all topics
const getTopics = async (req, res) => {
  try {
    const filter = {};

    if (req.query.subject) {
      filter.subject = req.query.subject;
    }

    const topics = await Topic.find(filter)
      .populate("subject", "name code semester")
      .sort({ priority: 1, frequency: -1 });

    res.status(200).json({
      success: true,
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error("Get Topics Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch topics",
    });
  }
};

// Get single topic
const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id)
      .populate("subject", "name code semester");

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    res.status(200).json({
      success: true,
      topic,
    });
  } catch (error) {
    console.error("Get Topic Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch topic",
    });
  }
};

module.exports = {
  getTopics,
  getTopicById,
};