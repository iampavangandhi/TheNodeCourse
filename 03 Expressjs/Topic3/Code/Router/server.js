//Express Router

var express = require("express");
var app = express();

//requiring the example route
var example = require("./example");

//both index.js and things.js should be in same directory
app.use("/example", example);

app.listen(3000, () => {
  console.log("Listening at http://localhost:3000/");
});
