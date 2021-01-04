require("../src/config/config")();
const Task = require("../src/models/task-model");

const removeTaskThenCountIncompleteTasks = async (id) => {
	try {
		const task = await Task.findByIdAndDelete(id);
		const incompleteTasks = await Task.countDocuments({ completed: false });
		console.log(task, incompleteTasks);
	} catch (error) {
		console.log(error);
	}
};

removeTaskThenCountIncompleteTasks("5ff24a5185caff19fe96c819");
