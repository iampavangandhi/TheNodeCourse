var express = require("express");
var router = express.Router();

var movies = [
  { id: 101, name: "Watchmen", year: 2009, rating: 7.6 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 },
  { id: 105, name: "Joker", year: 2019, rating: 8.5 },
];

// Default GET
router.get("/", function (req, res) {
  res.json(movies);
});

// GET Based on ID
router.get("/:id([0-9]{3,})", function (req, res) {
  var currMovie = movies.filter(function (movie) {
    if (movie.id == req.params.id) {
      return true;
    }
  });
  if (currMovie.length == 1) {
    res.status(200);
    res.json(currMovie[0]);
  } else {
    res.status(404); //Set status to 404 as movie was not found
    res.json({ message: "Not Found" });
  }
});

// POST Route
router.post("/", function (req, res) {
  //Check if all fields are provided and are valid:
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    var newId = movies[movies.length - 1].id + 1;
    movies.push({
      id: newId,
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
    });
    res.status(201);
    res.json({ message: "New movie created.", location: "/movies/" + newId });
  }
});

// PUT (UPDATE) Route
router.put("/:id", function (req, res) {
  //Check if all fields are provided and are valid:
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
    !req.params.id.toString().match(/^[0-9]{3,}$/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    //Gets us the index of movie with given id.
    var updateIndex = movies
      .map(function (movie) {
        return movie.id;
      })
      .indexOf(parseInt(req.params.id));

    if (updateIndex === -1) {
      //Movie not found, create new
      movies.push({
        id: req.params.id,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating,
      });
      res.json({
        message: "New movie created.",
        location: "/movies/" + req.params.id,
      });
    } else {
      //Update existing movie
      movies[updateIndex] = {
        id: req.params.id,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating,
      };
      res.status(200);
      res.json({
        message: "Movie id " + req.params.id + " updated.",
        location: "/movies/" + req.params.id,
      });
    }
  }
});

//Delete Route
router.delete("/:id", function (req, res) {
  var removeIndex = movies
    .map(function (movie) {
      return movie.id;
    })
    .indexOf(req.params.id); //Gets us the index of movie with given id.

  if (removeIndex === -1) {
    res.json({ message: "Not found" });
  } else {
    movies.splice(removeIndex, 1);
    res.status(200);
    res.send({ message: "Movie id " + req.params.id + " removed." });
  }
});

//Routes will go here
module.exports = router;
