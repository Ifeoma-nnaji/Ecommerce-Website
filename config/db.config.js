const dotenv = require('dotenv'); 
dotenv.config();

const DATABASE = process.env.DB_NAME;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const CONNECTIONLIMIT = process.env.DB_CONNECTIONLIMIT;

console.log("DB Config:");
console.log({
  HOST,
  PORT,
  DATABASE,
  USERNAME,
});
module.exports = {DATABASE, HOST, USERNAME, PASSWORD, PORT, CONNECTIONLIMIT}