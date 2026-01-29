require("dotenv").config();
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // 1. Kết nối DB trước khi load routes/models
    await connectDB();

    // 2. Load app (bao gồm routes, models, controllers)
    const app = require("./src/app");

    // 3. Lắng nghe request
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Fatal error during startup:", error.message);
    process.exit(1);
  }
};

startServer();
