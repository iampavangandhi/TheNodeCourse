// File Uploader

var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
//multer is the npm packages used for fild upload
var multer = require("multer");

//middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "/tmp/" }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/file_upload", function (req, res) {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);

  //storing file name
  var file = __dirname + "/" + req.files.file.name;

  //file saving function
  fs.readFile(req.files.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploaded successfully",
          filename: req.files.file.name,
        };
      }

      //response
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

// Listening
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
