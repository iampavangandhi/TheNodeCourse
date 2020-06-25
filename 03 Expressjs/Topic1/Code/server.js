//Topic 1 - Express Overview

//Including Express
var express = require("express");

//Init Express
var app = express();

//Get Request - Root Route
app.get("/", function (req, res) {
  //Sending Hello World! as Response
  res.send("Hello world!");
});

//About Route
app.get("/about", function (req, res) {
  //Sending About Me! as Response
  res.send("About Me!");
});

//Listening at Port:3000
app.listen(3000, () => {
  //Logging in the console
  console.log("Listening at http://localhost:3000/");
});
