'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        // id: uuidv4(),
        score: 5,
        comment: 'StaffSphere is great. It has helped me a lot managing my employees.',
        CompanyId: 1,
      },
      {
        // id: uuidv4(),
        score: 5,
        comment: `I can't imagine running HHRR without StaffSphere.`,
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
