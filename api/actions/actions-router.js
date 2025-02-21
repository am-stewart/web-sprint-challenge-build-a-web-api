const express = require('express');

const { validateId, validateAction, validateUpdate } = require('./actions-middlware');

const Actions = require('./actions-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Actions.get()
        .then(actions => {
            if(actions) {
                res.json(actions)
            } else {
                res.json([])
            }
        }).catch(next)
});

router.get('/:id', validateId, (req, res) => {
    res.json(req.action);
});

router.post('/', validateAction, (req, res, next) => {
    Actions.insert(req.body)
        .then(action => {
            res.json(action)
        })
        .catch(next);
});

router.put('/:id', validateId, validateUpdate, (req, res, next) => {
    Actions.update(req.params.id, req.body)
        .then(action => {
            res.json(action)
        })
        .catch(next)
});

router.delete('/:id', validateId, async (req, res, next) => {
    try {
        await Actions.remove(req.params.id)
        res.json();
    } catch(err) {
        next(err)
    }
});

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        custom: 'something went wrong in the projects router',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;