//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
} = require("../helpers/user-helper");

//! Routes definition
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete('/:id', deleteUser)

//! Exporting
module.exports = router;
