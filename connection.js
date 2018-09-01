const mysql = require('mysql');
const config = require('config');

const conn = mysql.createConnection({
    host: config.get('db').host,
    user: config.get('db').user,
    password: config.get('db').pass,
    database: config.get('db').db
});
 
conn.connect((err) => {
    if(err) throw err;
    console.log('Connection created');
});

module.exports = conn;