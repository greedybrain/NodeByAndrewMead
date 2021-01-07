//! NPM Modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//! Custom Modules
const UserSchema = require("../db/schemas/user-schema");

UserSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
	user.tokens = user.tokens.push({ token });

	try {
		await user.save();
		return token;
	} catch (error) {
		console.log(error.message);
	}
};

UserSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });
	const isMatch = await bcrypt.compare(password, user.password);
	if (!user || !isMatch) throw new Error("Check email or password");
	return user;
};

// Hash plain text password
UserSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password"))
		user.password = await bcrypt.hash(user.password, 8);

	next();
});

//!  Model definition
const User = mongoose.model("User", UserSchema);

//! Exporting
module.exports = User;
