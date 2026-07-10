const mysql = require('mysql2/promise');
const {HOST,USERNAME, DATABASE, PASSWORD, PORT, CONNECTIONLIMIT } = require('./db.config');

const connPool = mysql.createPool({
    host: HOST,
    port: Number(PORT),
    user: USERNAME,
    database: DATABASE ,
    password: PASSWORD,
    connectionLimit: CONNECTIONLIMIT
});


module.exports = connPool;