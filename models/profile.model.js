const conn = require('./../connection');

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM talentplaydb.profiles WHERE id = " + id;
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });
    });    
};

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM talentplaydb.profiles";
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });
    }); 
}

exports.getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM talentplaydb.profiles WHERE email = '" + email + "'";
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result.length > 0 ? true : false);
        });
    });
};

exports.create = (profileObj) => {
    return new Promise((resolve, reject) => {
        let query = "INSERT INTO talentplaydb.profiles(email, firstname, lastname, created, enabled) VALUES('" + profileObj.email + "','" + profileObj.firstname + "','" + profileObj.lastname + "'," + conn.escape(profileObj.created) + ", " + profileObj.enabled +")";
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });  
    });
};

exports.update = (profileObj) => {
    return new Promise((resolve, reject) => {
        let query = "UPDATE talentplaydb.profiles SET";
        query = query + " positions_id=" + profileObj.positions_id;
        query = query + ", gender='" + profileObj.gender + "'";
        query = query + ", laterality='" + profileObj.laterality + "'";
        query = query + ", nationality='" + profileObj.nationality + "'";
        query = query + ", age=" + profileObj.age;
        query = query + " WHERE id =" + profileObj.id;
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            console.log(result);
            resolve(result);
        });  
    });    
};