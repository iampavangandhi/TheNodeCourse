const express = require("express");
const router = express.Router();

let Todo = require("../models/todo");

// route for when user deletes a todo item
router.delete('/todo/:id', function (req, res) {
    // remove the document in the database that matches the id.
    Todo.find({ _id: req.params.id }).remove(function (err, doc) {
        if (err) throw err;

        // send response back with the document object that was deleted
        res.send(doc);
    });
});

module.exports = router;