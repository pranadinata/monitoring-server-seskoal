'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sensor_check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sensor_check.init({
    id_sensor: DataTypes.INTEGER,
    temperature: DataTypes.FLOAT,
    kelembapan: DataTypes.FLOAT,
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
    modelName: 'sensor_check',
    underscored: true,  // This option makes Sequelize use snake_case for automatically added fields like created_at and updated_at
    timestamps: true,   // Ensure that Sequelize adds the created_at and updated_at fields
    createdAt: 'created_at', // Explicitly define the field for createdAt
    updatedAt: 'updated_at'  // Explicitly define the field for updatedAt
  });
  return sensor_check;
};
