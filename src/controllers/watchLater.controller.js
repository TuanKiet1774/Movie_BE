const WatchLater = require("../models/WatchLater");

/**
 * POST /watch-later
 * Thêm movie vào Watch Later
 */
exports.addWatchLater = async (req, res) => {
  try {
    const { deviceId, movieSlug } = req.body;

    if (!deviceId || !movieSlug) {
      return res.status(400).json({
        message: "deviceId and movieSlug are required",
      });
    }

    const item = await WatchLater.create({
      deviceId,
      movieSlug,
    });

    res.status(201).json(item);
  } catch (error) {
    // Trùng deviceId + movieSlug
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Movie already in watch later",
      });
    }

    res.status(500).json({
      message: "Add watch later failed",
      error: error.message,
    });
  }
};

/**
 * GET /watch-later/:deviceId
 * Lấy danh sách Watch Later của device
 */
exports.getWatchLaterByDevice = async (req, res) => {
  try {
    const deviceId = req.params.deviceId || req.query.deviceId;

    const filter = {};
    if (deviceId) {
      filter.deviceId = deviceId;
    }

    const list = await WatchLater.find(filter).sort({ createdAt: -1 });

    res.json(list);
  } catch (error) {
    res.status(500).json({
      message: "Get watch later failed",
      error: error.message,
    });
  }
};

/**
 * DELETE /watch-later
 * Xoá movie khỏi Watch Later
 */
exports.removeWatchLater = async (req, res) => {
  try {
    const { deviceId, movieSlug } = req.body;

    if (!deviceId || !movieSlug) {
      return res.status(400).json({
        message: "deviceId and movieSlug are required",
      });
    }

    const result = await WatchLater.findOneAndDelete({
      deviceId,
      movieSlug,
    });

    if (!result) {
      return res.status(404).json({
        message: "Watch later item not found",
      });
    }

    res.json({ message: "Removed from watch later" });
  } catch (error) {
    res.status(500).json({
      message: "Remove watch later failed",
      error: error.message,
    });
  }
};

/**
 * GET /watch-later/check
 * Check movie có trong Watch Later không
 */
exports.checkWatchLater = async (req, res) => {
  try {
    const { deviceId, movieSlug } = req.query;

    if (!deviceId || !movieSlug) {
      return res.status(400).json({
        message: "deviceId and movieSlug are required",
      });
    }

    const exists = await WatchLater.exists({
      deviceId,
      movieSlug,
    });

    res.json({ exists: !!exists });
  } catch (error) {
    res.status(500).json({
      message: "Check watch later failed",
      error: error.message,
    });
  }
};
