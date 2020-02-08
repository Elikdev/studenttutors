const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	level: {
		type: String,
		required: true
	},
	profile_details: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: 'basic',
		enum: ['basic', 'tutor', 'admin']
	},
	accessToken: {
		type: String
	}
});

module.exports = mongoose.model('User', userSchema);
