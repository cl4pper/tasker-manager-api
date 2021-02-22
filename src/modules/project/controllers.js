require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const jwt = require('jsonwebtoken');
// SERVICES
const ProjectServices = require('./services');
// UTILS
const { defaultResponse, responseError, createProject } = require('@utils');

async function CreateProject (req, res) {
	const headers = req.headers;
	const token = headers.authorization;
	const body = req.body;
	const title = body.title;

	try {
		const user = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_PRIVATE_KEY);
		const userId = user._id;

		const project = {
			userId,
			title,
		};

		const newProject = await createProject(project);

		ProjectServices.createProject(newProject);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: 'PROJECT CREATED' }));
	} catch(err) {
		return responseError(res, 500, err.message);
	}
}

async function GetProjects (req, res) {

	try {
		let projects = await ProjectServices.getProjects();

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: projects }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

async function GetUserProjects (req, res) {
	const headers = req.headers;
	const token = headers.authorization;

	try {
		const user = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_PRIVATE_KEY);
		const userId = user._id;

		const projects = await ProjectServices.getProjectsById(userId);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: projects }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

async function DeleteUserProject (req, res) {
	const headers = req.headers;
	const token = headers.authorization;
	const params = req.params;
	const id = params.id;

	try {
		const user = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_PRIVATE_KEY);
		const userId = user._id;

		const query = {
			userId,
			id
		}

		await ProjectServices.deleteProjectsById(query);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: 'PROJECT DELETED' }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

module.exports = {
	CreateProject,
	GetProjects,
	GetUserProjects,
	DeleteUserProject
};
