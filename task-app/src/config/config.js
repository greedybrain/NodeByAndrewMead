module.exports = (app, express) => {
	require("dotenv").config();
	require("../db/db-setup");

	//! Middleware definition
	app.use(express.json()); // Parse incoming json to an object so we can access it in req handlers using req.body

	//! Mounting routers
	app.use("/users", require("../routes/user-routes"));
	app.use("/tasks", require("../routes/task-routes"));
};
