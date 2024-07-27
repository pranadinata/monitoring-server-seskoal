'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification_v2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notification_v2.init({
    whatsapp_chat_id: DataTypes.STRING,
    nama_sensor: DataTypes.STRING,
    suhu_sensor: DataTypes.FLOAT,
    kelembapan_sensor: DataTypes.FLOAT,
    fromMe: DataTypes.BOOLEAN,
    content: DataTypes.TEXT,
    type: DataTypes.STRING,
    notify_name: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    whatsapp_chat_id_serialized: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'notification_v2',
  });
  return notification_v2;
};