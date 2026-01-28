const Device = require("../models/Device");

/**
 * POST /devices
 * Tạo device mới hoặc cập nhật lastActiveAt nếu đã tồn tại
 */
exports.upsertDevice = async (req, res) => {
  try {
    const { deviceId } = req.body;

    if (!deviceId) {
      return res.status(400).json({
        message: "deviceId is required",
      });
    }

    const device = await Device.findOneAndUpdate(
      { deviceId },
      { lastActiveAt: new Date() },
      {
        new: true,
        upsert: true, // chưa có thì tạo mới
        setDefaultsOnInsert: true,
      },
    );

    res.json(device);
  } catch (error) {
    res.status(500).json({
      message: "Upsert device failed",
      error: error.message,
    });
  }
};

/**
 * GET /devices/:deviceId
 * Lấy thông tin device
 */
exports.getDeviceById = async (req, res) => {
  try {
    const { deviceId } = req.params;

    const device = await Device.findOne({ deviceId });

    if (!device) {
      return res.status(404).json({
        message: "Device not found",
      });
    }

    res.json(device);
  } catch (error) {
    res.status(500).json({
      message: "Get device failed",
      error: error.message,
    });
  }
};
