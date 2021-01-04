//! NPM Modules
const mongoose = require("mongoose");

//! Custom Modules
const UserSchema = require("../db/schemas/user-schema");

//!  Model definition
const User = mongoose.model("User", UserSchema);

//! Exporting
module.exports = User;
