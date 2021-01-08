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
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
});

module.exports = TaskSchema;
