'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sensor_check_backup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sensor_check_backup.init({
    id_sensor: DataTypes.INTEGER,
    temperature: DataTypes.FLOAT,
    kelembapan: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'sensor_check_backup',
  });
  return sensor_check_backup;
};