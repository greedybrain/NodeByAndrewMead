//! NPM Modules
// init express app
const express = require("express");
const app = express();

//! Custom Modules
require("dotenv").config(); // startup / set configurations
require("./db/db_setup"); // startup / set configurations
const userRouter = require("./routers/user_routes");
const taskRouter = require("./routers/task_routes");
 
//! Custom vars
const chalk = require("chalk");
const error = chalk.bold.redBright.inverse;
const success = chalk.bold.greenBright.inverse;

//! Middleware definition
// app.use((req, res, next) => {
// 	if (req.method === "GET") return res.send("GET requests are disabled");
// 	next();
// });

// app.use((req, res, next) =>
// 	res
// 		.status(503)
// 		.send("We are currently performing site maintenance. Please try back soon")
// );

// parse incoming JSON to object
app.use(express.json());

//! Mounting routers
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

//! Listening
const PORT = process.env.PORT || 5000;
const { log } = console;

app.listen(PORT, (err) =>
	err ? log(error(err)) : log(success(`Listening on PORT > ${PORT}`))
);
