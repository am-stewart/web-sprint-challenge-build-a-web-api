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
        res.json(req.body)
        next();
    } else {
        next({
            status: 400,
            message: 'a valid description and notes are required'
        });
    }
}

module.exports = {
    validateId,
    validateAction
};