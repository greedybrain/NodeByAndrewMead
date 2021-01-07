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
	let user = new User(req.body);
	try {
		user = await user.save();
		const token = await user.generateAuthToken()
		return res.status(201).send({ user, token });
	} catch (error) {
		res.status(500).send(error);
	}
};

const loginUser = async (req, res) => {
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
};


const updateUser = async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "email", "password", "age"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) return res.status(400).send("Invalid Updates");

	try {
		let user = await User.findById(req.params.id);
		if (!user)
			return res.status(404).send("Unable to update a user with that ID");

		updates.forEach((update) => (user[update] = req.body[update]));
		user = await user.save();
		return res.status(200).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
};

const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user)
			return res.status(404).send("Unable to delete a user with that ID");
		return res.status(200).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	loginUser,
};
