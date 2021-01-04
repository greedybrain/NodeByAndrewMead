//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const { getTasks, getTask, createTask } = require('../helpers/task-helper')

//! Routes definition
router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTask);

//! Exporting
module.exports = router;
