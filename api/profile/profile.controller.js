const profileModel = require('./../../models/profile.model');
const userModel = require('./../../models/user.model');

exports.getById = (req, res, next) => {
    profileModel.getById(req.params.id)
    .then(result => {
        let response = {
            code: result.length > 0 ? 'OK' : 'NOT_FOUND',
            data: result.length > 0 ? result[0] : {}
        };
        res.json(response);
    })
    .catch(error => {
        console.error(error);
        next();
    });
};

exports.getAll = (req, res, next) => {
    profileModel.getAll()
    .then(result => {
        let response = {
            code: result.length > 0 ? 'OK' : 'NOT_FOUND',
            data: result.length > 0 ? result : {}
        };
        res.json(response);
    })
    .catch(error => {
        console.error(error);
        next();
    }); 
};

exports.create = (req, res, next) => {
    let userId;
    profileModel.getByEmail(req.body.email)
    .then(exists => {
        if (!exists) {
            profileModel.create({
                email: req.body.email,
                firstname: req.body.fname,
                lastname: req.body.lname,
                created: new Date(),
                enabled: true
            })
            .then((profile) => {                
                userId = profile.insertId;
                return userModel.create(profile.insertId, req.body.email, req.body.user, req.body.password);
            })
            .then((result) => {
                return userModel.getById(userId);
            })
            .then((result) => {
                let retorno = {
                    code: result.length > 0 ? 'OK' : 'FAIL',
                    data: result.length > 0 ? result[0] : {},
                };
                res.json(retorno);
            })
            .catch(error => {
                console.error(error);
                next();
            });
        } else {
            res.json({code: 'DUPLICATED' });
        }
    })
    .catch(error => {
        console.error(error);
        next();
    });
};

exports.update = (req, res, next) => {
    profileModel.update(req.body)
    .then(result => {
        let response = {
            code: result.length > 0 ? 'OK' : 'NOT_FOUND',
            data: result.length > 0 ? result[0] : {}
        };
        res.json({code: 'OK'});
    })
    .catch(error => {
        console.error(error);
        next();
    });    
};