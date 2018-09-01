const conn = require('./../connection');

exports.getById = (id) => {    
    return new Promise((resolve, reject) => {
        let query = "SELECT T.* FROM talentplaydb.teams AS T ";
        query = query + "INNER JOIN talentplaydb.team_players AS TP ON T.id = TP.teams_id ";
        query = query + "INNER JOIN talentplaydb.profiles AS P ON TP.profiles_id = P.id ";
        query = query + "WHERE P.id = " + id;
        conn.query(query, (error, result) => {
            if (error) {
                console.error(error);
                reject();
            }
            resolve(result);
        });  
    });    
};