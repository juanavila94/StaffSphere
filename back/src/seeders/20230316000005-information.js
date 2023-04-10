'use strict';
/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Information', [
      {
        // id: uuidv4(),
        name: 'StaffSphere',
        tel: '9908833320',
        address: 'Avenida Siempreviva 345',
        email: 'hola@staffsphere.com',
      }
    ])
    /**
     * Add seed commands here.
  Seeder.associate = (models) => {
    Seeder.belongsTo(models.AnotherSeeder, {
      foreignKey: 'anotherSeederId',
      as: 'anotherSeeder',
    });
  };

  return Seeder;
    */
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
