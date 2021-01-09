//! NPM Modules
const mongoose = require("mongoose");

//! Custom Modules
const TaskSchema = require("../db/schemas/task_schema");

//!  Model definition
const Task = mongoose.model("Task", TaskSchema);

//! Exporting
module.exports = Task;
