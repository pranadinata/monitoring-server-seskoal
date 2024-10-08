// models/sensor.js
module.exports = (sequelize, DataTypes) => {
    const SensorCheck = sequelize.define('sensor_check', {
      id_sensor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      temperature: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      kelembapan: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    });
  
    return SensorCheck; // Pastikan yang dikembalikan adalah SensorCheck
  };
  