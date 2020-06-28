//URL Building

// This will only match the requests that have a 5-digit long id. You can use more complex regexes to match/validate your routes. If none of your routes match the request, you'll get a "Sorry, this is an invalid URL." message as response.

var express = require("express");
var app = express();

//id to be a 5-digit long number.
app.get("/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});

//other routes here.
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(3000, () => {
  console.log("Listening at http://localhost:3000/");
});
