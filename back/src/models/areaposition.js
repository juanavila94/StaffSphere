'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AreaPosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AreaPosition.init({
    areaId: DataTypes.UUID,
    positionId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'AreaPosition',
  });
  return AreaPosition;
};