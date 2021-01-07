//! NPM Modules
const { Schema } = require("mongoose");

//! Schema definition
const TokenSchema = new Schema({
	token: {
		type: String,
		required: true,
	},
});

module.exports = TokenSchema;
