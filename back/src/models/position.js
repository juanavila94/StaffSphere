'use strict';
const {
  Model
} = require('sequelize');
const area = require('./area');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Position.hasMany(models.File);
      models.File.belongsTo(Position);
      Position.belongsToMany(models.Area, {through: 'AreaPosition' })
      Position.belongsTo(models.Company)
      models.Company.hasMany(Position); 

    }
  }
  Position.init({
  
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Position',
    paranoid: true,
    deletedAt: 'deletedAt',
  });
  return Position;
};