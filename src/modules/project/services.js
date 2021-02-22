// MODELS
const { Project } = require('@models');

function createProject(project) {
	try {
		return project.save();
	} catch (err) {
		throw Error('Error at createProject from Project: ', err);
	}
}

function getProjects() {
	try {
		const projectsLists = Project.find();
		return projectsLists;
	} catch (err) {
		throw Error('Error at getLists from Project: ', err);
	}
}

function getProjectsById(query) {
	try {
		const projects = Project.find({ userId: query });
		return projects;
	} catch (err) {
		throw Error('Error at getLists from Project: ', err);
	}
}

function deleteProjectsById(query) {
	const { userId, id } = query;
	try {
		const project = Project.find({ userId, _id: id });
		return project.remove();
	} catch (err) {
		throw Error('Error at getLists from Project: ', err);
	}
}

function getProject(query) {
	try {
		const projectsList = ProjectsList.findOne({ _id: query });
		return projectsList;
	} catch (err) {
		throw Error('Error at getList from Project: ', err);
	}
}

module.exports = {
	createProject,
	getProject,
	getProjects,
	getProjectsById,
	deleteProjectsById
};
