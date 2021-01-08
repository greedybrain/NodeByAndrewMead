//! NPM Modules
const { Schema } = require("mongoose");
const validator = require("validator");

//! Custom Modules
const TokenSchema = require("./token-schema");

//! Schema definition
const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) throw Error("Invalid email");
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 6,
		validate(value) {
			if (value.toLowerCase().includes("password"))
				throw Error(
					"Password is invalid, password cannot contain the word 'password'"
				);
		},
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) throw Error("Please enter a valid age greater than 0");
		},
	},
	tokens: [TokenSchema],
});


//! Exporting
module.exports = UserSchema;
