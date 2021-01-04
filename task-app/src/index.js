//! NPM Modules
// init express app
const express = require("express");
const app = express();

//! Custom Modules
// Startup / Set configurations
require("dotenv").config();
require("./db/db-setup");

//! Middleware definition
// pars incoming JSON to object
app.use(express.json()); 

//! Mounting routers
const userRouter = require("./routes/user-routes");
const taskRouter = require("./routes/task-routes");
// Routers
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

//! Listening
const PORT = process.env.PORT || 5000;
const { log } = console;

app.listen(PORT, (err) =>
	err ? log(err) : log(`Listening on PORT > ${PORT}`)
);
 