const express = require('express');
const app = express();
const cors = require('cors');

// CORS TO LOCALHOST
const corsOptions = {
	origin: 'http://localhost:8080',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

// ROUTES  ---------------------------- START
const { AuthRoutes } = require('@modules/auth');
const { UserRoutes } = require('@modules/user');
const { ProjectRoutes } = require('@modules/project');
// ROUTES  ---------------------------- END

app.use('/api', [AuthRoutes, UserRoutes, ProjectRoutes]);

app.get('/api', (req, res) => {
	res.status(200).send();
});

module.exports = app;
