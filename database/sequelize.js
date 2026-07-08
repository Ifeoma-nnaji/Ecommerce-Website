const {Sequelize} = require('sequelize'); 

const {DATABASE, HOST, USERNAME, PASSWORD} = require('../config/db.config');

 const sequelize = new Sequelize (DATABASE, USERNAME, PASSWORD, {
  host: HOST, 
  dialect: 'mysql'
});

module.exports = sequelize;