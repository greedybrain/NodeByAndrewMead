//! Custom Modules
const Task = require("../models/task-model");

const getTasks = async (req, res) => {
        try {
		const tasks = await Task.find();
		return res.status(200).send(tasks);
	} catch (error) {
		res.status(500).send(error);
	}
}

const getTask = async (req, res) => {
        try {
		const task = await Task.findById(req.params.id);
		if (!task)
			return res.status(404).send("Unable to find a task with that ID");
		return res.status(200).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
}

const createTask = async (req, res) => {
        try {
		let task = new Task(req.body);
		task = await task.save();
		return res.status(201).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
}

module.exports = {
        getTasks,
        getTask,
        createTask
}