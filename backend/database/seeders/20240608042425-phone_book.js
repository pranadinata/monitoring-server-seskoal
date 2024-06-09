'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('phone_books', [{
          nama: 'Yesaya Pranadinata',
          no_hp: '6285721330911',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: 'Chandra Ramdhan',
          no_hp: '6283821896126',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: 'Pa Zein',
          no_hp: '6281210000959',
          status: true,
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
