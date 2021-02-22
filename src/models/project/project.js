const mongoose = require('mongoose');

const Project = mongoose.model(
	'Project',
	new mongoose.Schema({
		title: {
			type: String,
			required: true
		},
		userId: {
			type: String,
			required: true
		},
		tasks: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
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
	Project
};
