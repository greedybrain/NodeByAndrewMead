//! NPM Modules
require("./config/startup")();
const express = require("express");
const app = express();

//! Custom Vars
const User = require("./models/user-model");
const Task = require("./models/task-model");

//! Custom Vars
const PORT = process.env.PORT || 5000;
const log = console.log;

app.use(express.json()); //! Parse incoming json to an object so we can access it in req handlers using req.body

//! Routes definition
app.post("/users", async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		return res.status(200).send(user);
	} catch (error) {
		res.status(400).send({ error });
	}
});

app.post("/tasks", async (req, res) => {
	try {
		const task = new Task(req.body);
		await task.save();
		return res.status(200).send(task);
	} catch (error) { 
		res.status(400).send({ error });
	}
});

//! Listen
app.listen(PORT, (err) =>
	err ? log(err) : log(`Listening on PORT > ${PORT}`)
);
