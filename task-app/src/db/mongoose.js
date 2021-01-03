const mongoose = require("mongoose");
const validator = require("validator");

const connectionURL =
	"mongodb+srv://wycbw91:360ec06a3f644c8de5c83e7ac0ccdd63@node-go.skajs.mongodb.net/task-app-api?retryWrites=true&w=majority";
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
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const createTask = async () => {
	const task = new Task({
		description: "      Take out the garbage     ",
		completed: false,
	});
	try {
		await task.save();
	} catch (error) {
		console.log("Error is > ", error);
	}
};

createTask();

// const User = mongoose.model("User", {
// 	name: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,
// 		validate(value) {
// 			if (!validator.isEmail(value)) throw Error("Invalid email");
// 		},
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 6,
// 		validate(value) {
// 			if (value.toLowerCase().includes("password"))
// 				throw Error(
// 					"Password is invalid, password cannot contain the word 'password'"
// 				);
// 		},
// 	},
// 	age: {
// 		type: Number,
// 		default: 0,
// 		validate(value) {
// 			if (value < 0) throw Error("Please enter a valid age greater than 0");
// 		},
// 	},
// });

// const createUser = async () => {
// 	const user = new User({
// 		name: "Naya Willis",
// 		email: "WILLISNAYA@gmail.com",
// 		password: "newpassword",
// 		age: 29,
// 	});
// 	try {
// 		await user.save();
// 		console.log(user);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// createUser();
