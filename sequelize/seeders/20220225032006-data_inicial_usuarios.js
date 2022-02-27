'use strict';

const { password } = require("pg/lib/defaults");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Usuario",[
      {
        nombre:"Billy Grados",
        username:"BGrados",
        password:"1234",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre:"Lionel Messi",
        username:"D10S",
        password:"1234",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Usuario', null, {})
  }
};
