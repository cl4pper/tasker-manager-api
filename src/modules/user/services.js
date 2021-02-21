// MODELS
const { User } = require('@models');

function getUser(query) {
	try {
		const user = User.findOne({ username: query });
		return user;
	} catch (err) {
		throw Error('Error at getUser from User: ', err);
	}
}

function getUsers() {
	try {
		const users = User.find();
		return users;
	} catch (err) {
		throw Error('Error at getUsers from User: ', err);
	}
}

module.exports = {
	getUser,
	getUsers
};
