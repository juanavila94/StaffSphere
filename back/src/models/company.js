'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasOne(models.Review);
      models.Review.belongsTo(Company);
      Company.hasMany(models.Users);
      models.Users.belongsTo(Company);
      Company.hasMany(models.calendar);
      models.calendar.belongsTo(Company);
      Company.belongsToMany(models.Position, {through: 'CompanyPositions'}) 
      Company.belongsToMany(models.Area, {through: 'AreaCompanies'}) 

      
    }
  }
  Company.init({
    name: DataTypes.STRING,
    cuit: DataTypes.STRING,
    industry: DataTypes.STRING,
    location: DataTypes.STRING,
    numberEmployees: DataTypes.STRING,
    tel: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    authorized: DataTypes.BOOLEAN,
    paymentDay: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Company',
    paranoid: true,
    deletedAt: 'deletedAt',
  });
  return Company;
};