var express = require('express');
var app = express();
var http = require("http");
var upload = require('express-fileupload');

app.use(upload());
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
  if (req.files) {
    var file = req.files.filename,
      filename = file.name;
    file.mv("./upload" + filename, function (err) {
      if (err) {
        console.log(err)
        res.send("error occurred");
      }
      else {
        res.send("Done!");
      }
    });
  }
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});