//! Custom Modules
const Task = require("../models/task-model");

const getTasks = async (req, res, next) => {
	try {
		const tasks = await Task.find({ user: req.user._id });
		return res.status(200).send(tasks);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getTask = async (req, res, next) => {
	try {
		const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
		if (!task) return res.status(404).send();
		return res.status(200).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createTask = async (req, res, next) => {
	const task = new Task({
		...req.body,
		user: req.user._id,
	});

	try {
		await task.populate("user").execPopulate();
		await task.save();
		return res.status(201).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
};

const updateTask = async (req, res, next) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["description", "completed"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) return res.status(400).send("Invalid Updates");

	try {
		const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
		if (!task) return res.status(404).send();

		updates.forEach((update) => (task[update] = req.body[update]));
		await task.save();
		return res.status(200).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
};

const deleteTask = async (req, res, next) => {
	try {
		const task = await Task.findOneAndRemove({
			_id: req.params.id,
			user: req.user._id,
		});
		if (!task) return res.status(404).send();
		return res.status(200).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
};

const deleteAllTasks = async (req, res, next) => {
	req.user.tasks = [];
	try {
		await req.user.save();
	} catch (error) {
		res.send(400).send(error);
	}
};

module.exports = {
	getTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
	deleteAllTasks,
};
