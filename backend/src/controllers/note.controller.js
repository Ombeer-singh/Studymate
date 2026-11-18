const Note = require("../models/note.model");

// ==================== GET NOTES BY TOPIC ====================

const getNotesByTopic = async (req, res) => {
  try {
    const notes = await Note.find({
      topic: req.params.topicId,
    }).populate(
      "topic",
      "name frequency priority"
    );

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    console.error(
      "Get Notes Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
    });
  }
};

// ==================== GET SINGLE NOTE ====================

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(
      req.params.id
    ).populate(
      "topic",
      "name frequency priority"
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    console.error(
      "Get Note Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch note",
    });
  }
};

module.exports = {
  getNotesByTopic,
  getNoteById,
};