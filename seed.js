require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("./models/Movie");

// Connect to MongoDB using the URI from .env 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("error", (err) => console.error("❌ MongoDB connection error:", err));

mongoose.connection.once("open", async () => {
  console.log("✅ MongoDB Connected for Seeding data"); 

  const movies = [
    { name: "Inception", genre: "Sci-Fi", rating: 8.8, releaseDate: "2010-07-16", gist: "Dream within a dream thriller", director: "Christopher Nolan", cast: ["Leonardo DiCaprio","Joseph Gordon-Levitt","Elliot Page"], posterURL: "/images/inception.jpg" },
    { name: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseDate: "2014-11-07", gist: "Space and time adventure", director: "Christopher Nolan", cast: ["Matthew McConaughey","Anne Hathaway","Jessica Chastain"], posterURL: "/images/interstellar.jpg" },
    { name: "Avatar", genre: "Sci-Fi", rating: 7.9, releaseDate: "2009-12-18", gist: "Blue aliens and humans", director: "James Cameron", cast: ["Sam Worthington","Zoe Saldana"], posterURL: "/images/avatar.jpg" },
    { name: "Titanic", genre: "Romance", rating: 7.8, releaseDate: "1997-12-19", gist: "Ship sinks, hearts break", director: "James Cameron", cast: ["Leonardo DiCaprio","Kate Winslet"], posterURL: "/images/titanic.jpg" },
    { name: "The Dark Knight", genre: "Action", rating: 9.0, releaseDate: "2008-07-18", gist: "Batman vs Joker", director: "Christopher Nolan", cast: ["Christian Bale","Heath Ledger"], posterURL: "/images/dark-knight.jpg" },
    { name: "The Godfather", genre: "Crime", rating: 9.2, releaseDate: "1972-03-24", gist: "Mafia family story", director: "Francis Ford Coppola", cast: ["Marlon Brando","Al Pacino"], posterURL: "/images/godfather.jpg" },
    { name: "Shawshank Redemption", genre: "Drama", rating: 9.3, releaseDate: "1994-09-23", gist: "Hope and friendship in prison", director: "Frank Darabont", cast: ["Tim Robbins","Morgan Freeman"], posterURL: "/images/shawshank.jpg" },
    { name: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseDate: "1994-10-14", gist: "Crime stories intertwined", director: "Quentin Tarantino", cast: ["John Travolta","Samuel L. Jackson"], posterURL: "/images/pulp-fiction.jpg" },
    { name: "Fight Club", genre: "Drama", rating: 8.8, releaseDate: "1999-10-15", gist: "Underground fight club chaos", director: "David Fincher", cast: ["Brad Pitt","Edward Norton"], posterURL: "/images/fight-club.jpg" },
    { name: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseDate: "1999-03-31", gist: "Reality is fake", director: "Wachowskis", cast: ["Keanu Reeves","Laurence Fishburne"], posterURL: "/images/matrix.jpg" },
    { name: "Joker", genre: "Drama", rating: 8.4, releaseDate: "2019-10-04", gist: "Clown turns criminal", director: "Todd Phillips", cast: ["Joaquin Phoenix","Robert De Niro"], posterURL: "/images/joker.jpg" },
    { name: "Avengers: Endgame", genre: "Action", rating: 8.4, releaseDate: "2019-04-26", gist: "Final Avengers battle", director: "Russo Brothers", cast: ["Robert Downey Jr.","Chris Evans"], posterURL: "/images/avengers-endgame.jpg" },
    { name: "Spider-Man: No Way Home", genre: "Action", rating: 8.3, releaseDate: "2021-12-17", gist: "Multiverse madness", director: "Jon Watts", cast: ["Tom Holland","Zendaya"], posterURL: "/images/spiderman-no-way-home.jpg" },
    { name: "Black Panther", genre: "Action", rating: 7.3, releaseDate: "2018-02-16", gist: "Wakanda forever", director: "Ryan Coogler", cast: ["Chadwick Boseman","Michael B. Jordan"], posterURL: "/images/black-panther.jpg" },
    { name: "Iron Man", genre: "Action", rating: 7.9, releaseDate: "2008-05-02", gist: "Tony Stark becomes a hero", director: "Jon Favreau", cast: ["Robert Downey Jr."], posterURL: "/images/iron-man.jpg" },
    { name: "Guardians of the Galaxy", genre: "Action", rating: 8.0, releaseDate: "2014-08-01", gist: "Space heroes unite", director: "James Gunn", cast: ["Chris Pratt","Zoe Saldana"], posterURL: "/images/guardians-galaxy.jpg" },
    { name: "Frozen", genre: "Animation", rating: 7.4, releaseDate: "2013-11-27", gist: "Let it go", director: "Chris Buck", cast: ["Idina Menzel","Kristen Bell"], posterURL: "/images/frozen.jpg" },
    { name: "The Lion King", genre: "Animation", rating: 8.5, releaseDate: "1994-06-24", gist: "Hakuna Matata", director: "Roger Allers", cast: ["Matthew Broderick","James Earl Jones"], posterURL: "/images/lion-king.jpg" },
    { name: "Toy Story", genre: "Animation", rating: 8.3, releaseDate: "1995-11-22", gist: "Toys come to life", director: "John Lasseter", cast: ["Tom Hanks","Tim Allen"], posterURL: "/images/toy-story.jpg" },
    { name: "Coco", genre: "Animation", rating: 8.4, releaseDate: "2017-11-22", gist: "Music and family", director: "Lee Unkrich", cast: ["Anthony Gonzalez","Gael García Bernal"], posterURL: "/images/coco.jpg" }
  ];

  try {
    await Movie.deleteMany({});
    await Movie.insertMany(movies);
    console.log("✅ Database Seeded with 20 movies (local images)");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
});
