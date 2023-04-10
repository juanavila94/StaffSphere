'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Company.hasMany(calendar)
      calendar.belongsTo(models.Company);
    }
  }
  calendar.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    label: DataTypes.STRING,
    day: DataTypes.DATE,
  
  }, {
    sequelize,
    modelName: 'calendar',
  });
  return calendar;
};