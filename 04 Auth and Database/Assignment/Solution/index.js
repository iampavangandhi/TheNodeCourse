// TODO APP

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Todo = require("./todo");
const user = require("./routes/user"); //new addition
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

app.use("/user", user);

// Setting up EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Setting up Public Files (CSS)
app.use(express.static(__dirname + "/public"));

// Setting up Body-Parser
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(bodyParser.json());

// Todo.js
app.use("/", Todo);

app.listen(3000, () => {
  console.log("Listening");
});
