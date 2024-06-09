'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('seskoal@2019password', 10);
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nama: 'Administrator',
      username: 'admin',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
