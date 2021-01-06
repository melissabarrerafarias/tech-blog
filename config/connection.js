const Sequelize = require('sequelize');
require('dotenv').config();

// creates connection to database, and passes in MySQL info for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  module.exports = sequelize;