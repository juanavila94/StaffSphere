'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      File.belongsTo(models.Users)
      models.Users.hasOne(File)
      File.belongsTo(models.Position)
      models.Position.hasMany(File);
      File.belongsTo(models.Area)
      models.Area.hasMany(File);
      
    }
  }
  File.init(
    {
     
      dateOfAdmission: DataTypes.STRING,
      cuil: DataTypes.STRING,
      cbu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'File',
      paranoid: true,
      deletedAt: 'deletedAt',
  
    }
  );
  return File;
};
