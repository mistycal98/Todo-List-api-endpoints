const mongoose = require("mongoose");
const uniqid = require("uniqid");

const todoSchema = new mongoose.Schema({
  taskid: {
    type: String,
    default: uniqid()
  },
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
