//! Custom Modules
const User = require("../models/user-model");

const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		return res.status(200).send(users);
	} catch (error) {
		res.status(400).send(error);
	}
};

const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user)
			return res.status(404).send("Unable to find a user with that ID");
		return res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createUser = async (req, res) => {
	try {
		let user = new User(req.body);
		user = await user.save();
		return res.status(201).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getUsers,
	getUser,
	createUser,
};
