'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cuit: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numberEmployees: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      authorized: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      paymentDay: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Date.now(),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      InformationId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Information',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};