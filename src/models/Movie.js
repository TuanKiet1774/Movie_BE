const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    posterUrl: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    year: {
      type: Number,
      index: true,
    },

    categories: {
      type: [String],
      default: [],
      index: true,
    },

    quality: {
      type: String,
      enum: ["CAM", "HD", "FullHD", "4K"],
      default: "HD",
    },

    language: {
      type: String,
      default: "vi",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Movie", movieSchema);
