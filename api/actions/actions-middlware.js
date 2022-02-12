const { get } = require('./actions-model');

function validateId(req, res, next) {
    get(req.params.id)
        .then(action => {
            if(action) {
                req.action = action;
                next();
            } else {
                next({
                    status: 404,
                    message: 'there is no action for the given id'
                });
            }
        })
        .catch(next);
}

function validateAction(req, res, next) {
    if (req.body.description && req.body.notes && req.body.project_id) {
        (action => {
            req.action = action
        })
        next();
    } else {
        next({
            status: 400,
            message: 'a description and notes are required'
        });
    }
}

function validateUpdate(req, res, next) {
    const { description, notes, project_id, completed } = req.body
    if (description && notes && project_id && completed != undefined) {
        (action => {
            req.action = action
        })
        next();
    } else {
        next({
            status: 400,
            message: 'You must enter a description, notes, project id and completed status'
        })
    }
}

module.exports = {
    validateId,
    validateAction,
    validateUpdate
};