const teamsModel = require('./../../models/teams.model');

exports.getById = (req, res, next) => {
    teamsModel.getById(req.params.id)
    .then(result => {
        let response = {
            code: result.length > 0 ? 'OK' : 'NOT_FOUND',
            data: result.length > 0 ? result : []
        };
        res.json(response);
    })
    .catch(error => {
        console.error(error);
        next();
    });
};