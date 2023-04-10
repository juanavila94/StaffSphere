'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('calendars', [
      {
        title : "Cumpleaños Didi",  
        label : "blue",
        description: "comprar torta",
        day: "10-10-2023",
        id: 1,
        CompanyId: 1,
      },
      {
        title : "Ya no es el Cumpleaños de Didi",  
        label : "green",
        description: "NO comprar torta",
        day: "11-11-2023",
        id: 2,
        CompanyId: 2,
      }, 
      ])
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
