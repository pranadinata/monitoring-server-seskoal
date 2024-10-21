'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sensor_details', [{
      nama_sensor: 'Sensor 1',
      description: 'Letak di tempat 1',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nama_sensor: 'Sensor 2',
      description: 'Letak di tempat 2',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nama_sensor: 'Sensor 3',
      description: 'Letak di tempat 3',
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
