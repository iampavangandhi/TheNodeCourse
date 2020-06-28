//Express Router

var express = require("express");
//express router
var router = express.Router();

router.get("/", function (req, res) {
  res.send("GET route on example.");
});

router.post("/", function (req, res) {
  res.send("POST route on example.");
});

//export this router to use in our index.js
module.exports = router;
