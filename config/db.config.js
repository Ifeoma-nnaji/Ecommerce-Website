const dotenv = require('dotenv'); 
dotenv.config();

const DATABASE = process.env.DB_NAME;
const HOST = process.env.DB_HOST;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const CONNECTIONLIMIT = process.env.DB_CONNECTIONLIMIT;

module.exports = {DATABASE, HOST, USERNAME, PASSWORD, CONNECTIONLIMIT}