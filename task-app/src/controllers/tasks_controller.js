//! Custom Modules
const Task = require("../models/task_model");

module.exports = {
	getTasks: async (req, res, next) => {
		try {
			const tasks = await Task.find({ user: req.user._id });
			return res.status(200).send(tasks);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	getTask: async (req, res, next) => {
		try {
			const task = await Task.findOne({
				_id: req.params.id,
				user: req.user._id,
			});
			if (!task) return res.status(404).send();
			return res.status(200).send(task);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	createTask: async (req, res, next) => {
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
	},
	updateTask: async (req, res, next) => {
		const updates = Object.keys(req.body);
		const allowedUpdates = ["description", "completed"];
		const isValidOperation = updates.every((update) =>
			allowedUpdates.includes(update)
		);

		if (!isValidOperation) return res.status(400).send("Invalid Updates");

		try {
			const task = await Task.findOne({
				_id: req.params.id,
				user: req.user._id,
			});
			if (!task) return res.status(404).send();

			updates.forEach((update) => (task[update] = req.body[update]));
			await task.save();
			return res.status(200).send(task);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteTask: async (req, res, next) => {
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
	},
	deleteAllTasks: async (req, res, next) => {
		req.user.tasks = [];
		try {
			await req.user.save();
		} catch (error) {
			res.send(400).send(error);
		}
	},
};
