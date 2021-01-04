//! NPM Modules
const { Schema } = require("mongoose");

//! Schema definition
const TaskSchema = new Schema({
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

module.exports = TaskSchema;
