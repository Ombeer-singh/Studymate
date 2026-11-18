const express = require("express");

const {
  getNotesByTopic,
  getNoteById,
} = require("../controllers/note.controller");

const router = express.Router();

// Get all notes for a topic
router.get(
  "/topic/:topicId",
  getNotesByTopic
);

// Get single note
router.get(
  "/:id",
  getNoteById
);

module.exports = router;