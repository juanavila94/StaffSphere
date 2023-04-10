'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Area.hasMany(models.File);
      models.File.belongsTo(Area);
      Area.belongsToMany(models.Position, {through: 'AreaPosition'})
      models.Company.hasMany(Area)
      Area.belongsTo(models.Company) 


    }
  }
  Area.init({
    area: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Area',
    paranoid: true,
    deletedAt: 'deletedAt',
  });
  return Area;
};