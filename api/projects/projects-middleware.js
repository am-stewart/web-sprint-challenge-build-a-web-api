const { get } = require('./projects-model')

function validateId(req, res, next) {
    get(req.params.id)
        .then(project => {
            if(project) {
                req.project = project;
                next();
            } else {
                next({
                    status: 404,
                    message: 'there is no project with the given id'
                });
            }
        })
        .catch(next);
}
function validateProject(req, res, next) {
    if (req.body.name && req.body.description) {
        res.json(req.body)
        next();
    } else {
        next({
            status: 400,
            message: 'a valid name and description are required'
        });
    }
}
//validateActionBody

//EXPORT MIDDLEWARE AS INDIVIDUAL THINGS
module.exports = {
    validateId,
    validateProject
}