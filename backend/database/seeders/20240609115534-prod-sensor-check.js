'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sensor_checks', [{
      id_sensor: 1,
      temperature: 80,
      kelembapan: 50,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_sensor: 2,
      temperature: 30,
      kelembapan: 50,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_sensor: 3,
      temperature: 40,
      kelembapan: 50,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_sensor: 1,
      temperature: 80,
      kelembapan: 40,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
      
  }
};
