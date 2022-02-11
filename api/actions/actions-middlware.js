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

module.exports = {
    validateId
};