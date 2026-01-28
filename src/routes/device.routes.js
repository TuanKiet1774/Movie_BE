const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/device.controller");

router.post("/", deviceController.upsertDevice);
router.get("/:deviceId", deviceController.getDeviceById);

module.exports = router;
