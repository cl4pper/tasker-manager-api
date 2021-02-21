require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// SERVICES
const UserServices = require('./services');
// UTILS
const { defaultResponse, responseError } = require('@utils');

async function GetUser (req, res) {
	const params = req.params;
	const username = params.username;

	try {
		let user = await UserServices.getUser(username);
		if (!user) return responseError(res, 400, 'USER DOES NOT EXIST');

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: user }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

async function GetUsers (req, res) {

	try {
		let users = await UserServices.getUsers();

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: users }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

async function DeleteUser (req, res) {
	const params = req.params;
	const id = params.id;

	try {
		let user = await UserServices.getUserById(id);
		if (!user) return responseError(res, 400, 'USER NOT FOUND');

		await UserServices.deleteUser(id);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: 'USER DELETED' }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

async function DeleteUsers (req, res) {

	try {
		await UserServices.deleteUsers();

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: 'USERS DELETED' }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

module.exports = {
	GetUser,
	GetUsers,
	DeleteUser,
	DeleteUsers
};
