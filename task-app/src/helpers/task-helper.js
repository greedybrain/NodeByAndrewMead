//! Custom Modules
const Task = require("../models/task-model");

const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		return res.status(200).send(tasks);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getTask = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task)
			return res.status(404).send("Unable to find a task with that ID");
		return res.status(200).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createTask = async (req, res) => {
	let task = new Task(req.body);

	try {
		task = await task.save();
		return res.status(201).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
};

const updateTask = async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["description", "completed"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) return res.status(400).send("Invalid Updates");

	try {
		let task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task)
			return res.status(404).send("Unable to find a task with that ID");
		return res.status(200).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = {
	getTasks,
	getTask,
	createTask,
	updateTask,
};
