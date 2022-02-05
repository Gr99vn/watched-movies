require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch(err => {
    console.log("Could not connect to the database", err);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movieSchema = mongoose.Schema({
  name: String
});

const Movie = mongoose.model("Movie", movieSchema);

app.get("/api/movies", (req, res) => {
  Movie.find((err, movies) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(Object.values(movies));
    }
  });
});

app.post("/api/movies", (req, res) => {
  const movie = new Movie({
    name: req.body.name
  });

  movie.save((err, movie) => {
    if (err) {
      res.status(500).json({ success: false, err });
    } else {
      res.status(200).json({ success: true, movie });
    }
  });
});

app.put("/api/movies/:id", (req, res) => {
  console.log(req.body.name);
  Movie.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } }, (err) => {
    if (err) {
      res.status(500).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  })
});

app.delete("/api/movies/:id", (req, res) => {
  Movie.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Web page is hosted at http://localhost:${PORT}`);
});