const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    introduction: {
      type: String,
      trim: true,
    },

    concepts: [
      {
        heading: String,
        content: String,
      },
    ],

    formulas: [
      {
        formula: String,
        explanation: String,
      },
    ],

    examples: [
      {
        question: String,
        solution: String,
      },
    ],

    examPoints: [
      {
        type: String,
      },
    ],

    handwrittenNote: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;