const express = require("express");

const {
  signup,
  login,
  getMe,
} = require("../controllers/auth.controller");

const protect = require("../middleware/auth.middleware");

const router = express.Router();

// ==================== PUBLIC ROUTES ====================

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);


// ==================== PROTECTED ROUTES ====================

// Get current logged-in user
router.get("/me", protect, getMe);


// ==================== EXPORT ====================

module.exports = router;