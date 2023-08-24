const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: String,
    email: String,
	token: String,
	password: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
