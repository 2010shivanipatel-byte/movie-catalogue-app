// app.js
require('dotenv').config();
const mongoose = require('mongoose');


// MongoDB connection string
const uri = process.env.MONGODB_URI || "mongodb+srv://Shivani:sK3YGzsMzXgPi7Ye@cluster0.rfm9pb7.mongodb.net/sample_mflix?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Define Movie Schema
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

// Create Movie Model
const Movie = mongoose.model('Movie', movieSchema);

// Movie data to seed
const movies = [
  { name: "Inception", genre: "Sci-Fi", rating: 8.8, releaseDate: "2010-07-16", gist: "Dream within a dream thriller", director: "Christopher Nolan", cast: ["Leonardo DiCaprio","Joseph Gordon-Levitt","Elliot Page"], posterURL: "https://m.media-amazon.com/images/I/51s+LrZcUwL._AC_.jpg" },
  { name: "Titanic", genre: "Romance", rating: 7.8, releaseDate: "1997-12-19", gist: "Ship sinks, hearts break", director: "James Cameron", cast: ["Leonardo DiCaprio","Kate Winslet"], posterURL: "https://m.media-amazon.com/images/I/81UeJ4+GJ2L._AC_SL1500_.jpg" },
  { name: "The Dark Knight", genre: "Action", rating: 9.0, releaseDate: "2008-07-18", gist: "Batman vs Joker", director: "Christopher Nolan", cast: ["Christian Bale","Heath Ledger"], posterURL: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_.jpg" },
  { name: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseDate: "2014-11-07", gist: "Space and time adventure", director: "Christopher Nolan", cast: ["Matthew McConaughey","Anne Hathaway","Jessica Chastain"], posterURL: "https://m.media-amazon.com/images/I/71n58M4U7DL._AC_SL1500_.jpg" },
  { name: "Avengers: Endgame", genre: "Action", rating: 8.4, releaseDate: "2019-04-26", gist: "Final Avengers battle", director: "Russo Brothers", cast: ["Robert Downey Jr.","Chris Evans"], posterURL: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg" },
  { name: "Frozen", genre: "Animation", rating: 7.4, releaseDate: "2013-11-27", gist: "Let it go", director: "Chris Buck", cast: ["Idina Menzel","Kristen Bell"], posterURL: "https://m.media-amazon.com/images/I/81Cw07Fph7L._AC_SL1500_.jpg" },
  { name: "Joker", genre: "Drama", rating: 8.4, releaseDate: "2019-10-04", gist: "Clown turns criminal", director: "Todd Phillips", cast: ["Joaquin Phoenix","Robert De Niro"], posterURL: "https://m.media-amazon.com/images/I/71F1h8tA8yL._AC_SL1200_.jpg" },
  { name: "The Godfather", genre: "Crime", rating: 9.2, releaseDate: "1972-03-24", gist: "Mafia family story", director: "Francis Ford Coppola", cast: ["Marlon Brando","Al Pacino"], posterURL: "https://m.media-amazon.com/images/I/51TqOChsYPL._AC_.jpg" },
  { name: "Shutter Island", genre: "Thriller", rating: 8.2, releaseDate: "2010-02-19", gist: "Mind-bending mystery", director: "Martin Scorsese", cast: ["Leonardo DiCaprio","Mark Ruffalo"], posterURL: "https://m.media-amazon.com/images/I/71k4p1x3zvL._AC_SL1024_.jpg" },
  { name: "Black Panther", genre: "Action", rating: 7.3, releaseDate: "2018-02-16", gist: "Wakanda forever", director: "Ryan Coogler", cast: ["Chadwick Boseman","Michael B. Jordan"], posterURL: "https://m.media-amazon.com/images/I/81lD6FSgTyL._AC_SL1500_.jpg" },
  { name: "Finding Nemo", genre: "Animation", rating: 8.1, releaseDate: "2003-05-30", gist: "Fish adventure", director: "Andrew Stanton", cast: ["Albert Brooks","Ellen DeGeneres"], posterURL: "https://m.media-amazon.com/images/I/71gP7a0Oe9L._AC_SL1024_.jpg" },
  { name: "The Lion King", genre: "Animation", rating: 8.5, releaseDate: "1994-06-24", gist: "Hakuna Matata", director: "Roger Allers", cast: ["Matthew Broderick","James Earl Jones"], posterURL: "https://m.media-amazon.com/images/I/81gj3cE0V-L._AC_SL1500_.jpg" },
  { name: "Gladiator", genre: "Action", rating: 8.5, releaseDate: "2000-05-05", gist: "Rome’s greatest warrior", director: "Ridley Scott", cast: ["Russell Crowe","Joaquin Phoenix"], posterURL: "https://m.media-amazon.com/images/I/81TchRfj2wL._AC_SL1500_.jpg" },
  { name: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseDate: "1999-03-31", gist: "Reality is fake", director: "Wachowskis", cast: ["Keanu Reeves","Laurence Fishburne"], posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
  { name: "Spider-Man: No Way Home", genre: "Action", rating: 8.3, releaseDate: "2021-12-17", gist: "Multiverse madness", director: "Jon Watts", cast: ["Tom Holland","Zendaya"], posterURL: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1200_.jpg" },
  { name: "Doctor Strange", genre: "Action", rating: 7.5, releaseDate: "2016-11-04", gist: "Magic and dimensions", director: "Scott Derrickson", cast: ["Benedict Cumberbatch","Chiwetel Ejiofor"], posterURL: "https://m.media-amazon.com/images/I/81F4iU7e6nL._AC_SL1500_.jpg" },
  { name: "Moana", genre: "Animation", rating: 7.6, releaseDate: "2016-11-23", gist: "Ocean adventure", director: "Ron Clements", cast: ["Auli'i Cravalho","Dwayne Johnson"], posterURL: "https://m.media-amazon.com/images/I/81nKxV0qYfL._AC_SL1500_.jpg" },
  { name: "Avatar", genre: "Sci-Fi", rating: 7.9, releaseDate: "2009-12-18", gist: "Blue aliens and humans", director: "James Cameron", cast: ["Sam Worthington","Zoe Saldana"], posterURL: "https://m.media-amazon.com/images/I/71K7Q4uU+qL._AC_SL1500_.jpg" },
  { name: "The Avengers", genre: "Action", rating: 8.0, releaseDate: "2012-05-04", gist: "Heroes unite", director: "Joss Whedon", cast: ["Robert Downey Jr.","Chris Evans"], posterURL: "https://m.media-amazon.com/images/I/71xZ3Z8T5BL._AC_SL1024_.jpg" },
  { name: "Coco", genre: "Animation", rating: 8.4, releaseDate: "2017-11-22", gist: "Music and family", director: "Lee Unkrich", cast: ["Anthony Gonzalez","Gael García Bernal"], posterURL: "https://m.media-amazon.com/images/I/81ZJ6eVJYbL._AC_SL1500_.jpg" }
];

// Function to seed database
async function seedDB() {
  try {
    await Movie.deleteMany({});
    await Movie.insertMany(movies);
    console.log("✅ Database Seeded with 20 movies");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

// Run seed
mongoose.connection.once('open', () => {
  console.log("MongoDB connection open...");
  seedDB();
});
