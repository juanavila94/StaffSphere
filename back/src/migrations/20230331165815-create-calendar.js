'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('calendars', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      label: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      day: {
        type: Sequelize.DATE,
       defaultValue: Date.now(),
      },
      CompanyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Companies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue :Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue :Date.now()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('calendars');
  }
};