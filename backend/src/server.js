require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

// ==================== PORT ====================

const PORT = process.env.PORT || 8000;


// ==================== START SERVER ====================

const startServer = async () => {
  try {
    // Connect MongoDB first
    await connectDB();

    // Start Express server
    app.listen(PORT, () => {
      console.log(
        `StudyMate Server running on port ${PORT}`
      );
    });

  } catch (error) {
    console.error(
      "Server Error:",
      error.message
    );

    process.exit(1);
  }
};


// ==================== RUN SERVER ====================

startServer();