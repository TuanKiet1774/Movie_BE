const Movie = require("../models/Movie");

/**
 * POST /movies
 * Tạo movie mới
 */
exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    // trùng slug
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Movie with this slug already exists",
      });
    }

    res.status(500).json({
      message: "Create movie failed",
      error: error.message,
    });
  }
};

/**
 * GET /movies
 * Lấy danh sách movie (filter + search)
 */
exports.getMovies = async (req, res) => {
  try {
    const { category, year, language, quality, q } = req.query;

    const filter = {};

    if (category) filter.categories = category;
    if (year) filter.year = Number(year);
    if (language) filter.language = language;
    if (quality) filter.quality = quality;

    if (q) {
      filter.name = { $regex: q, $options: "i" };
    }

    const movies = await Movie.find(filter).sort({ createdAt: -1 });

    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: "Get movies failed",
      error: error.message,
    });
  }
};

/**
 * GET /movies/:slug
 * Lấy chi tiết movie theo slug
 */
exports.getMovieBySlug = async (req, res) => {
  try {
    const movie = await Movie.findOne({ slug: req.params.slug });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({
      message: "Get movie failed",
      error: error.message,
    });
  }
};

/**
 * PUT /movies/:slug
 * Cập nhật movie
 */
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true },
    );

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({
      message: "Update movie failed",
      error: error.message,
    });
  }
};

/**
 * DELETE /movies/:slug
 * Xoá movie
 */
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({
      slug: req.params.slug,
    });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Delete movie failed",
      error: error.message,
    });
  }
};
