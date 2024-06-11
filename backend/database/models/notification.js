'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {

    static associate(models) {
      // define association here
    }
  }
  notification.init({
 
    whatsapp_chat_id: DataTypes.STRING,
    nama_sensor: DataTypes.STRING,
    value_sensor: DataTypes.FLOAT,
    fromMe: DataTypes.BOOLEAN,
    content: DataTypes.TEXT,
    type: DataTypes.STRING,
    notify_name: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    whatsapp_chat_id_serialized: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'notification',
  });
  return notification;
};