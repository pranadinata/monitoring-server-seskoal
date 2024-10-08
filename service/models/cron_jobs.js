const { table } = require("console");

// models/sensor.js
module.exports = (sequelize, DataTypes) => {
    const CronJobs = sequelize.define('cron_jobs', {
      execute: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      table: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return CronJobs; // Pastikan yang dikembalikan adalah SensorCheck
  };
  