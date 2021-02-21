const mongoose = require('mongoose');

const Task = mongoose.model(
	'Task',
	new mongoose.Schema({
		content: {
			type: String,
			required: true
		},
		status: {
			type: String,
			require: true
		},
		createdAt: {
			type: Date,
			required: true
		},
		updatedAt: {
			type: Date,
			required: true
		}
	})
);

module.exports = {
	Task
};
