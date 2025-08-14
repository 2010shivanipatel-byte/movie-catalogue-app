const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: String,
  genre: String,
  rating: Number,
  releaseDate: String,
  gist: String,
  director: String,
  cast: [String],
  posterURL: String
});

module.exports = mongoose.model('Movie', movieSchema);
