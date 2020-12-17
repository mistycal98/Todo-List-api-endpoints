const express = require("express");
const router = express.Router();

const { getallTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/todoControllers');
const { checkRequestBody, checkUpdateRequest } = require("../middlewares/todoMiddlewares");

// /todos/
router.route('/').get(getallTasks).post(checkRequestBody , createTask);
router.route('/:taskid').get(getTask).patch(checkUpdateRequest,  updateTask).delete(deleteTask);


module.exports = router;
