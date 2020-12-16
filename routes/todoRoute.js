const express = require("express");
const router = express.Router();

const { getallTasks, createTask, getTask, updateTask, deleteTask, delelteAllTasks } = require('../controllers/todoControllers')

// /todos/
router.route('/').get(getallTasks).post(createTask);
router.route('/:taskId').get(getTask).patch(updateTask).delete(deleteTask);
router.route('/delete').delete(delelteAllTasks);


module.exports = router;
