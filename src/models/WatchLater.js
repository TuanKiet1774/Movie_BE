const mongoose = require("mongoose");

const watchLaterSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String, 
      required: true,
      index: true,
    },

    movieSlug: {
      type: String, 
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

watchLaterSchema.index({ deviceId: 1, movieSlug: 1 }, { unique: true });

module.exports = mongoose.model("WatchLater", watchLaterSchema);
