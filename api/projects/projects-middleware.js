// add middlewares here related to projects

const { get } = require('./projects-model')

//will want middlewares for: checking valid id, checking for a valid project body, checking for a valid action body

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
//validateProjBody
//validateActionBody

//EXPORT MIDDLEWARE AS INDIVIDUAL THINGS
module.exports = {
    validateId
}