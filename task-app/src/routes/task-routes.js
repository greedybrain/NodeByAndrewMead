//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const Task = require("../models/task-model");

//! Routes definition
router.get("/", async (req, res) => {
	try {
		const tasks = await Task.find();
		return res.status(200).send(tasks);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get("/:id", async ({ params } = {}, res) => {
	try {
		const task = await Task.findById(params.id);
		if (!task)
			return res.status(404).send("Unable to find a task with that ID");
		return res.status(200).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/", async ({ body } = {}, res) => {
	try {
		let task = new Task(body);
		task = await task.save();
		return res.status(201).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
});

//! Exporting
module.exports = router;
