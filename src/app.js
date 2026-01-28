const express = require("express");

const app = express();

// Middleware parse JSON
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/devices", require("./routes/device.routes"));
app.use("/movies", require("./routes/movie.routes"));
app.use("/watch-later", require("./routes/watchLater.routes"));


module.exports = app;
