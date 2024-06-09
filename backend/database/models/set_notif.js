'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_notif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_notif.init({
    notif: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'set_notif',
  });
  return set_notif;
};