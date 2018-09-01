const userModel = require('./../../models/user.model');

exports.login = (req, res, next) => {    
    userModel.login(req.query.user, req.query.password)
    .then(result => {
        let response = {
            code: result.length > 0 ? 'OK' : 'FAIL'
        };
        if (result.length > 0) response.user = result[0];
        res.json(response);
    })
    .catch(error => {
        console.log(error);
        next();
    })
};
