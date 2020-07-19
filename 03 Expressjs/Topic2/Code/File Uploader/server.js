// File Uploader using Express-fileupload

var express = require("express");
var app = express();
var upload = require("express-fileupload");

//middlewares
app.use(upload());

// GET Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// POST Route
app.post("/", function (req, res) {
  if (req.files) {
    var file = req.files.filename,
      filename = file.name;
    file.mv("./public/upload" + filename, function (err) {
      if (err) {
        console.log(err);
        res.send("Error Occurred");
      } else {
        res.send("File uploaded successfully");
      }
    });
  }
});

// SERVER
var server = app.listen(8081, function () {
  var host = "localhost";
  var port = server.address().port;

  console.log(`Listening at http://${host}:${port}`);
});
