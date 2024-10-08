// models/index.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Pastikan di sini Anda mengimport model dengan benar
db.SensorCheck = require('./sensor')(sequelize, Sequelize);
db.CronJobs = require('./cron_jobs')(sequelize, Sequelize);


module.exports = db;
