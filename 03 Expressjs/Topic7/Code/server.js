// REST API Movies Example
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Require the Router we defined in movies.js
var movies = require("./movies.js");

//Default
app.get("/", (req, res) => {
  res.send("HOME");
});

//Use the Router on the sub route /movies
app.use("/movies", movies);

app.listen(3000, () => {
  //Logging in the console
  console.log("Listening at http://localhost:3000/");
});
