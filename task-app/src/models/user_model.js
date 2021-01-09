//! NPM Modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//! Custom Modules
const UserSchema = require("../db/schemas/user_schema");
const Task = require("./task_model");

UserSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.tokens;

	return userObject;
};

UserSchema.virtual("tasks", {
	ref: "Task",
	localField: "_id",
	foreignField: "user",
});

UserSchema.methods.generateAuthToken = async function () {
	let user = this;
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
	user.tokens = user.tokens.concat({ token });

	try {
		await user.save();
	} catch (error) {
		console.log(error.message);
	}
	return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
	try {
		const user = await User.findOne({ email });
		const isMatch = await bcrypt.compare(password, user.password);
		if (!user || !isMatch) throw new Error("Check email or password");
		return user;
	} catch (error) {
		console.log(error);
	}
};

// Hash plain text password
UserSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password"))
		user.password = await bcrypt.hash(user.password, 8);

	next();
});

UserSchema.pre("remove", async function (next) {
	const user = this;
	try {
		await Task.deleteMany({ user: user._id });
	} catch (error) {
		console.log(error);
	}

	next();
});

//!  Model definition
const User = mongoose.model("User", UserSchema);

//! Exporting
module.exports = User;
