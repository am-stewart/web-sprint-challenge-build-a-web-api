const express = require('express');

const { validateId, validateProject, validateProjectUpdate } = require('./projects-middleware');

const Projects = require('./projects-model');
const Actions = require('./../actions/actions-model');

const router = express.Router();

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

router.get('/:id', validateId, (req, res) => {
    res.json(req.project);
});

router.post('/', validateProject, (req, res, next) => {
    Projects.insert(req.body)
        .then(project => {
            res.json(project)
        })
        .catch(next);
});

router.put('/:id', validateId, validateProjectUpdate, (req, res, next) => {
    Projects.update(req.project)
        .then(project => {
            res.json(project)
        })
        .catch(next);
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