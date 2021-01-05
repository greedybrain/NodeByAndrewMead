//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
} = require("../helpers/user-helpers");

//! Routes definition
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);

//! Exporting
module.exports = router;
