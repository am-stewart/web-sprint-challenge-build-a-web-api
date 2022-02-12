const express = require('express');
const server = express();

const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Let's conquer this sprint challenge!</h2>`)
})

module.exports = server;
