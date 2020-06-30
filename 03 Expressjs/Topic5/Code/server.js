//Middlewares

var express = require("express");
var app = express();

//First middleware before response is sent
app.use(function (req, res, next) {
  console.log("Start");
  next();
});

//Route handler
app.get("/", function (req, res, next) {
  console.log("Middle");
  res.send("HOME");
  next();
});

app.use("/", function (req, res) {
  console.log("End");
});

app.listen(3000, () => {
  console.log("Listening at http://localhost:3000/");
});
