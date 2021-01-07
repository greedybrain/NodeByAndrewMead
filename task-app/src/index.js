//! NPM Modules
// init express app
const express = require("express");
const app = express();

//! Custom Modules
// startup / set configurations
require("dotenv").config();
require("./db/db-setup");

//! Custom vars
const chalk = require("chalk");
const error = chalk.bold.redBright.inverse;
const success = chalk.bold.greenBright.inverse;

//! Middleware definition
// parse incoming JSON to object
app.use(express.json());

//! Mounting routers
const userRouter = require("./routers/user-routes");
const taskRouter = require("./routers/task-routes");
// routers
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

//! Listening
const PORT = process.env.PORT || 5000;
const { log } = console;

app.listen(PORT, (err) =>
	err ? log(error(err)) : log(success(`Listening on PORT > ${PORT}`))
);

const jwt = require("jsonwebtoken");

// myFunc = () => {
// 	const token = jwt.sign({ _id: "abc123" }, "mysecret", {
// 		expiresIn: "0 seconds",
// 	});
// 	console.log(token);

// 	try {
// 		const payload = jwt.verify(token, "mysecret");
// 		console.log(payload);
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// myFunc();
