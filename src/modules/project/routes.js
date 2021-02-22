require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// LIBS
const express = require('express');
const router = express.Router();
// CONTROLLERS
const ProjectControllers = require('./controllers');

router.post('/project', ProjectControllers.CreateProject);
router.get('/projects', ProjectControllers.GetProjects);
router.get('/projects/user', ProjectControllers.GetUserProjects);
router.delete('/project/:id', ProjectControllers.DeleteUserProject);

module.exports = router;
