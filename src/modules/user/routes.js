require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// LIBS
const express = require('express');
const router = express.Router();
// CONTROLLERS
const UserControllers = require('./controllers');

router.get('/users', UserControllers.GetUsers);
router.get('/user/:username', UserControllers.GetUser);

module.exports = router;
