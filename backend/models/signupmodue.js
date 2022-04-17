const mongoose = require("mongoose");

const signupTemplate = new mongoose.Schema(
	{
		fullname: { type: String, required: true },
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const signupmodel = mongoose.model("signupTable", signupTemplate);

module.exports = { signupmodel };
