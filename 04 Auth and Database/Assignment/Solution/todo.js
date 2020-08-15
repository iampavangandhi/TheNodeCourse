const express = require("express");
const router = express.Router();

// TODO LIST
todos = [
  { id: 1, todo: "Make Food" },
  { id: 2, todo: "Pay Bill" },
  { id: 3, todo: "Learn Nodejs" },
];

// GET ROUTE TO SHOW-UP TODOS
router.get("/", (req, res) => {
  res.status(200).render("index", { todos: todos });
});

// POST ROUTE TO ADD TODOS
router.post("/", (req, res) => {
  let newId = -1;
  if (todos.length == 0) {
    newId = 0;
  } else {
    newId = todos[todos.length - 1].id;
  }

  if (req.body.todo != "") {
    todos.push({
      id: newId + 1,
      todo: req.body.todo,
    });
  }
  res.status(200).render("index", { todos: todos });
});

// GET ROUTE TO DELETE TODOS
router.get("/del/:id", (req, res) => {
  todos = todos.filter((todo) => {
    if (todo.id != req.params.id) {
      return todo;
    }
  });
  res.status(200).redirect("/");
});

// EXPORTING ROUTER
module.exports = router;
