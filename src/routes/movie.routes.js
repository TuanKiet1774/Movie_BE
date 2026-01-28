const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

// CRUD
router.post("/", movieController.createMovie);
router.get("/", movieController.getMovies);
router.get("/:slug", movieController.getMovieBySlug);
router.put("/:slug", movieController.updateMovie);
router.delete("/:slug", movieController.deleteMovie);

module.exports = router;
