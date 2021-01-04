//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const User = require("../models/user-model");

//! Routes definition
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		return res.status(200).send(users);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.get("/:id", async ({ params } = {}, res) => {
	try {
		const user = await User.findById(params.id);
		if (!user)
			return res.status(404).send("Unable to find a user with that ID");
		return res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/", async ({ body } = {}, res) => {
	try {
		let user = new User(body);
		user = await user.save();
		return res.status(201).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

//! Exporting
module.exports = router;
