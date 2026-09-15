const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

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


// ==================== 404 ROUTE ====================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


// ==================== EXPORT ====================

module.exports = app;