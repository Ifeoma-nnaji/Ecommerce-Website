const mysql = require('mysql2/promise');
const {HOST,USERNAME, DATABASE, PASSWORD, CONNECTIONLIMIT } = require('./db.config');

const connPool = mysql.createPool({
    host: HOST,
    user: USERNAME,
    database: DATABASE ,
    password: PASSWORD,
    connectionLimit: CONNECTIONLIMIT
});


module.exports = connPool;