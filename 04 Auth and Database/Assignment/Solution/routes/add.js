const express = require("express");
const router = express.Router();

let Todo = require("../models/todo");

// route for when submits new todo item
router.post('/todo', function (req, res) {
    // create todo model with data passed from request and save to databse

    Todo({
        todo: req.body.todo,
        check: req.body.check,
        username: req.session.user
    }).save(function (err, doc) {
        if (err) throw err;
        console.log("item saved!");

        // send response back with the document object that was created
        res.send(doc);
    });
});

module.exports = router;