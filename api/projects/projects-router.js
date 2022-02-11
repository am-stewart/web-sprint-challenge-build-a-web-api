const express = require('express');

//inject middleware here const { middlewares listed } = require('middlewarepath')

const Projects = require('./projects-model');

const router = express.Router();

// PROJECT ENDPOINTS!!!!

router.get('/', (req, res, next) => {
    //returns an array of projects as the body of repsonse
    //if there are no projects, respond with an empty array
});

router.get('/:id', (req, res, next) => {
    //return a project with the give id as the body of the response
    //if there is no project with the give id it responds with a status code of 404
});

router.post('/', (req, res, next) => {
    //returns the newly created project as the body of the response
    //if the request body is missing any of the required fields it responds with a 400
});

router.put('/:id', (req, res, next) => {
    //returns the updated project as the body of the response
    //if there is no project with the given id it responds with a status code 404
    //if the request body is missing any of the required fields it responds with a status code 400
});

router.delete('/:id', (req, res, next) => {
    //returns NO response body
    //if there is no project with the given id it responds with a status code 404
});

router.get('/:id/actions', (req, res, next) => {
    //returns an array of actions (could be empty) belonging to a project with the given id
    //if there is no project with the given id it responds with a status code 404
})