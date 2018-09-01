const md5 = require('md5');
const conn = require('./../connection');

exports.login = (user, password) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM talentplaydb.users WHERE user = '" + user + "' AND password = '" + md5(password) + "'";
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });  
    });    
};

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM talentplaydb.users WHERE profiles_id = " + id;
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });
    }); 
};

exports.create = (id, email, user, password) => {
    return new Promise((resolve, reject) => {
        let query = "INSERT INTO talentplaydb.users (profiles_id, email, user, password) VALUES(" + id + ",'" + email + "','" + user + "', '" + md5(password) + "')";
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });  
    });
};