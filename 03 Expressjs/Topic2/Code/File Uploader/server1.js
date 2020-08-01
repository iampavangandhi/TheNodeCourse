// File Uploader using Multer

var express = require("express");
var multer = require("multer");

var app = express();

// Multer Settings
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Multer Upload
var upload = multer({ storage: storage }).single("myfile");

// GET
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// POST
app.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.send("Error Occurred");
    } else {
      res.send("File uploaded successfully");
    }
  });
});

// Listening
var server = app.listen(8081, function () {
  var host = "localhost";
  var port = server.address().port;

  console.log(`Listening at http://${host}:${port}`);
});
