'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Files', {
      id: {
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
        type : Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      dateOfAdmission: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cuil: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cbu: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
      deletedAt:{
        allowNull: true,
        type: Sequelize.DATE
      },
      UserId:{
        // type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
        type : Sequelize.INTEGER,
        allowNull: true,
        references: {
          model:'Users',
          key: 'id'
      },
      onDelete : 'SET NULL',
      onUpdate : 'CASCADE'
    },
    AreaId:{
      // type: Sequelize.UUID,
      // defaultValue: Sequelize.UUIDV4,
      type : Sequelize.INTEGER,
      allowNull: true,
      references: {
        model:'Areas',
        key: 'id'
    },
    onDelete : 'SET NULL',
    onUpdate : 'CASCADE'
  },
    PositionId:{
    // type: Sequelize.UUID,
    // defaultValue: Sequelize.UUIDV4,
    type : Sequelize.INTEGER,
    allowNull: true,
    references: {
      model:'Positions',
      key: 'id'
  },
  onDelete : 'SET NULL',
  onUpdate : 'CASCADE'
},

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Files');
  }
};