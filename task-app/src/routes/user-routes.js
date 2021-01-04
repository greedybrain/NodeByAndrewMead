//! NPM Modules
const express = require("express");
const router = express.Router();

//! Custom Modules
const { getUsers, getUser, createUser } = require("../helpers/user-helpers");

//! Routes definition
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

//! Exporting
module.exports = router;
