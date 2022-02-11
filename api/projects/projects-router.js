const express = require('express');

//inject middleware here const { middlewares listed } = require('middlewarepath')

const Projects = require('./projects-model');
const Actions = require('./../actions/actions-model');

const router = express.Router();

// PROJECT ENDPOINTS!!!!

    //returns an array of projects as the body of response
    //if there are no projects, respond with an empty array
router.get('/', async (req, res, next) => {
    Projects.get() 
        .then(projects => {
            if(projects) {
                res.json(projects)
            } else {
                res.json([])
            }
        }).catch(next)
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

///ERROR CATCH
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        custom: 'something went wrong in the projects router',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;