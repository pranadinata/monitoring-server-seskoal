'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sensor_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sensor_detail.init({
    nama_sensor: DataTypes.STRING,
    description: DataTypes.TEXT,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'sensor_detail',
    underscored: true,  // This ensures snake_case for column names
    timestamps: true,   // Enables created_at and updated_at fields
    createdAt: 'created_at',  // Map Sequelize's createdAt to created_at
    updatedAt: 'updated_at'   // Map Sequelize's updatedAt to updated_at
  });
  return sensor_detail;
};
