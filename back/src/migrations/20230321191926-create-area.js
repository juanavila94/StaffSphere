'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Areas', {
      id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
        // type: Sequelize.UUID, 
        // defaultValue: Sequelize.UUIDV4,
      },
      area: {
        type: Sequelize.STRING,
    
      },
      CompanyId:{
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
      deletedAt:{
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Areas');
  }
};