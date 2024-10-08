'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // for (let index = 0; index < 1000; index++) {
    //   await queryInterface.bulkInsert('sensor_checks', [{
    //     id_sensor: 1,
    //     temperature: 80,
    //     kelembapan: 50,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id_sensor: 2,
    //     temperature: 30,
    //     kelembapan: 70,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },{
    //     id_sensor: 3,
    //     temperature: 22,
    //     kelembapan: 88,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    //   ], {});
      
    // }
    
  },

  async down (queryInterface, Sequelize) {
   
  }
};
