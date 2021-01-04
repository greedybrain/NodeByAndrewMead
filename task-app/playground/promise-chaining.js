require("../src/config/config")();
const Task = require("../src/models/task-model");

const removeTaskThenCountIncompleteTasks = async (id) => {
	try {
		const task = await Task.findByIdAndDelete(id);
		const incompleteTasks = await Task.countDocuments({ completed: false });
		return [task, incompleteTasks];
	} catch (error) {
		console.log(error);
	}
};

removeTaskThenCountIncompleteTasks("5ff281a4eb6af3336c3f747a")
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
