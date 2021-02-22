const bcrypt = require('bcrypt');
//
const { User, Project } = require('@models');

async function saltPassword(password) {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
}

async function formatUser (data) {
	const user = new User({
		...data,
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	user.password = await saltPassword(user.password);

	return user;
}

async function createProject (data) {
	const project = new Project({
		...data,
		projects: [],
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	return project;
}

module.exports = {
	formatUser,
	createProject
}
