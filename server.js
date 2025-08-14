require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");  // Required for static folder
const Movie = require("./models/Movie");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serve images and CSS
app.use(methodOverride("_method"));

// DB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Mongo Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes

// Home - list movies or search functionality
app.get("/", async (req, res) => {
  const q = req.query.q?.trim();
  const filter = q ? { name: { $regex: q, $options: "i" } } : {};
  const movies = await Movie.find(filter).sort({ releaseDate: -1 });
  res.render("index", { movies, q });
});

// Add movie form
app.get("/add", (req, res) => res.render("add"));

// Create movie
app.post("/add", async (req, res) => {
  const body = { ...req.body };
  if (body.cast) body.cast = body.cast.split(",").map(s => s.trim()).filter(Boolean);
  await Movie.create(body);
  res.redirect("/");
});

// Edit movie form and update functionality
app.get("/edit/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("edit", { movie });
});

// Update movie
app.put("/edit/:id", async (req, res) => {
  const body = { ...req.body };
  if (body.cast) body.cast = body.cast.split(",").map(s => s.trim()).filter(Boolean);
  await Movie.findByIdAndUpdate(req.params.id, body);
  res.redirect("/");
});

// Delete movie or remove functionality
app.delete("/delete/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// Start server-Final tweaks and bug fixes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
