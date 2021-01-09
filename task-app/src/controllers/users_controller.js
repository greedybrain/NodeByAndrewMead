//! Custom Modules
const User = require("../models/user_model");

module.exports = {
	getUser: async (req, res) => {
		try {
			await req.user.populate("tasks").execPopulate();
			res.send(req.user);
		} catch (error) {}
	},
	createUser: async (req, res) => {
		let user = new User(req.body);
		try {
			user = await user.save();
			const token = await user.generateAuthToken();
			return res.status(201).send({ user, token });
		} catch (error) {
			res.status(500).send(error);
		}
	},
	loginUser: async (req, res) => {
		try {
			const user = await User.findByCredentials(
				req.body.email,
				req.body.password
			);
			const token = await user.generateAuthToken();
			return res.send({ user, token });
		} catch (error) {
			res.status(400).send(error);
		}
	},
	updateUser: async (req, res) => {
		const updates = Object.keys(req.body);
		const allowedUpdates = ["name", "email", "password", "age"];
		const isValidOperation = updates.every((update) =>
			allowedUpdates.includes(update)
		);

		if (!isValidOperation) return res.status(400).send("Invalid Updates");

		try {
			updates.forEach((update) => (req.user[update] = req.body[update]));
			await req.user.save();
			return res.status(200).send(req.user);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteUser: async (req, res) => {
		try {
			await req.user.remove();
			return res.status(200).send(req.user);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	logoutUser: async (req, res) => {
		const { user } = req;
		try {
			user.tokens = user.tokens.filter(
				(currToken) => currToken.token !== req.token
			);
			await user.save();
			return res.status(200).send({ message: "logged out" });
		} catch (error) {
			res.status(500).send(error);
		}
	},
	logoutOutAllSessions: async (req, res) => {
		const { user } = req;
		try {
			user.tokens = [];
			await user.save();
			res.status(200).send({ message: "Logged out of all sessions" });
		} catch (error) {
			res.status(500).send(error);
		}
	},
};
