const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const subjectRoutes = require("./routes/subject.routes");
const topicRoutes = require("./routes/topic.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();

// ==================== MIDDLEWARE ====================

// Allow frontend requests
app.use(cors());

// Read JSON data from request body
app.use(express.json());

// Read form data
app.use(express.urlencoded({ extended: true }));

// ==================== TEST ROUTE ====================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "StudyMate API is running",
  });
});

// ==================== AUTH ROUTES ====================

app.use("/api/auth", authRoutes);

// ==================== SUBJECT ROUTES ====================

app.use("/api/subjects", subjectRoutes);

// ==================== TOPIC ROUTES ====================

app.use("/api/topics", topicRoutes);

// ==================== NOTE ROUTES ====================

app.use("/api/notes", noteRoutes);

// ==================== 404 ROUTE ====================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ==================== EXPORT ====================

module.exports = app;