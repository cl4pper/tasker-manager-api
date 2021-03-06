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

function getUserById(query) {
	try {
		const user = User.findOne({ _id: query });
		return user;
	} catch (err) {
		throw Error('Error at getUserById from User: ', err);
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

function deleteUser(query) {
	try {
		const user = User.findOne({ _id: query });
		return user.remove();
	} catch (err) {
		throw Error('Error at deleteUser from User: ', err);
	}
}

function deleteUsers() {
	try {
		return User.find().deleteMany();
	} catch (err) {
		throw Error('Error at deleteUsers from User: ', err);
	}
}

module.exports = {
	getUser,
	getUserById,
	getUsers,
	deleteUser,
	deleteUsers
};
