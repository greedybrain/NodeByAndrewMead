//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const {
	getTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
	deleteAllTasks
} = require("../controllers/tasks_controller");
const ifAuthorized = require("../middleware/auth");

//! Routes definition
router.get("/", ifAuthorized, getTasks);
router.get("/:id", ifAuthorized, getTask);
router.post("/", ifAuthorized, createTask);
router.patch("/:id", ifAuthorized, updateTask);
router.delete("/:id", ifAuthorized, deleteTask);
router.delete('/deleteAll', ifAuthorized, deleteAllTasks)

//! Exporting
module.exports = router;
