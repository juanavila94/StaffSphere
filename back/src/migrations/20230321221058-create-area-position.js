'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AreaPositions', {
      id: {
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      areaId: {
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
        type : Sequelize.INTEGER,
        autoIncrement: true,
        references: {
          model: 'Areas',
          key: 'id'
        },
        onDelete : 'SET NULL',
        onUpdate : 'CASCADE',
      },
      positionId: {
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
        type : Sequelize.INTEGER,
        autoIncrement: true,
        references: {
          model: 'Positions',
          key: 'id'
        },
        onDelete : 'SET NULL',
        onUpdate : 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AreaPositions');
  }
};