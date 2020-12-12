const Todo = require("../models/Todo");

// get all tasks from db
const getallTasks = async (req, res) => {
  try {
    let data = await Todo.find();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

// create task in db and save
const createTask = async (req, res) => {
  const data = new Todo({
    task: req.body.task,
  });
  try {
    let saveTask = await data.save(res.json(data));
  } catch (error) {
    res.json({ message: error });
  }
};

// get a specific task
const getTask = async (req, res) => {
  try {
    const data = await Todo.findById(req.params.taskId);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

// update a task
const updateTask = async (req, res) => {
  try {
    const data = await Todo.updateOne(
      { _id: req.params.taskId },
      { $set: { task: req.body.task, completed: req.body.completed } }
      //   { $set: { completed: req.body.completed } }
    );
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  try {
    // const data = await Todo.findByIdAndDelete(req.params.id);  // Alternate
    const data = await Todo.deleteOne({ _id: req.params.taskId });
    res.send({ message: `Delete task ${req.params.taskId}` });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getallTasks, createTask, getTask, updateTask, deleteTask };
