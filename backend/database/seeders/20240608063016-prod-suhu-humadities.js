'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suhu_humadities', [{
      nama: 'Temperature',
      value: 80,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Kelembapan',
      value: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
