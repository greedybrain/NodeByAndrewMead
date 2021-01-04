//! NPM Modules
const mongoose = require("mongoose");

//! Custom Vars
const MONGO_URI_USER = process.env.MONGO_URI_USER;
const MONGO_URI_SECRET = process.env.MONGO_URI_SECRET;
const CONNECTION_URL = `mongodb+srv://${MONGO_URI_USER}:${MONGO_URI_SECRET}@node-go.skajs.mongodb.net/task-app-api?retryWrites=true&w=majority`;

//! DB definition
const startDB = async () => {
	try {
		await mongoose.connect(CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("Connected to database");
	} catch (error) {
		console.log(error);
	}
};
startDB();

// const Task = mongoose.model("Task", {
// 	description: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false,
// 	},
// });

// const createTask = async () => {
// 	const task = new Task({
// 		description: "      Take out the garbage     ",
// 		completed: false,
// 	});
// 	try {
// 		await task.save();
// 	} catch (error) {
// 		console.log("Error is > ", error);
// 	}
// };

// createTask();
