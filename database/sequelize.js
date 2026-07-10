const {Sequelize, NUMBER} = require('sequelize'); 

const {DATABASE, HOST, PORT, USERNAME, PASSWORD} = require('../config/db.config');

 const sequelize = new Sequelize (DATABASE, USERNAME, PASSWORD,{
  host: HOST, 
  port: Number(PORT),
  dialect: 'mysql'
});

module.exports = sequelize;