const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todo: String,
  check: Boolean,
  username: String
});

module.exports = mongoose.model('Todo', todoSchema);