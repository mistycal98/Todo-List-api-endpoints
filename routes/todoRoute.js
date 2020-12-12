const express = require("express");
const router = express.Router();

const { getallTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/todoControllers')

const Todo = require("../models/Todo");

// /todos/
router.route('/').get(getallTasks).post(createTask);
router.route('/:taskId').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;
