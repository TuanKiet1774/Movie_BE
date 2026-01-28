require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    console.log("🚀 Starting server...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
})();
