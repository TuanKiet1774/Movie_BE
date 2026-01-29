const connectDB = async () => {
  const mongoose = require("mongoose");
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB Atlas connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
