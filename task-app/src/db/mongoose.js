const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017/task-app-api";
mongoose
	.connect(connectionURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Connected to database"))
	.catch((err) => console.log(error));

const Task = mongoose.model("Task", {
	description: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
});

const createTask = async () => {
	const task = new Task({
		description: "Take out the garbage",
		completed: false,
	});
	try {
		console.log(task);
		await task.save();
	} catch (error) {
		console.log("Error is > ", error);
	}
};

// const User = mongoose.model("User", {
// 	name: {
// 		type: String,
// 	},
// 	age: {
// 		type: Number,
// 	},
// });

// const createUser = async () => {
// 	const user = new User({
// 		name: "Willis",
// 		age: "Mike",
// 	});
// 	try {
// 		await user.save();
// 		console.log(user);
// 	} catch (error) {
// 		console.log("Error", error);
// 	}
// };

// createUser();
