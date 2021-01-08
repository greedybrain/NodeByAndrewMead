//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const {
	getUser,
	createUser,
	updateUser,
	deleteUser,
	loginUser,
	logoutUser,
	logoutOutAllSessions,
} = require("../helpers/user-helper");
const ifAuthorized = require("../middleware/auth");

//! Routes definition
// signup and login
router.post("/", createUser);
router.post("/login", loginUser);
// other routes
router.get("/me", ifAuthorized, getUser);
router.patch("/me", ifAuthorized, updateUser);
router.delete("/me", ifAuthorized, deleteUser);
router.post("/logout", ifAuthorized, logoutUser);
router.post("/logoutAll", ifAuthorized, logoutOutAllSessions);

//! Exporting
module.exports = router;
