const express = require("express");
const router = express.Router();
const watchLaterController = require("../controllers/watchLater.controller");

// Add
router.post("/", watchLaterController.addWatchLater);

// List by device
router.get("/:deviceId", watchLaterController.getWatchLaterByDevice);

// Check exists
router.get("/check/status", watchLaterController.checkWatchLater);

// Remove
router.delete("/", watchLaterController.removeWatchLater);

module.exports = router;
