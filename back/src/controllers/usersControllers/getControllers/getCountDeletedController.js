const Users = require("../../../models").Users;
const File = require('../../../models').File;
const Position = require('../../../models').Position;
const Area = require('../../../models').Area;
const { Op } = require('sequelize');

const getCountDeletedController = async (CompanyId) => {
    const deletedUsers = await File.findAll({
        where: {
          deletedAt: {
            [Op.ne]: null,
            [Op.gte]: new Date(new Date().getFullYear(), 0, 1),
            [Op.lte]: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999),
          }
        },
        paranoid: false,
        include: [{
          model: Users,
          where: {
            deletedAt: {
              [Op.ne]: null,
              [Op.gte]: new Date(new Date().getFullYear(), 0, 1),
              [Op.lte]: new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999),
            },
            CompanyId: CompanyId
          },
          paranoid: false,
        }, {
          model: Position,
          attributes: ['position'],
        }, {
          model: Area,
          attributes: ['area'],
        }]
      });
      
  return !deletedUsers.length ? 'No data to validate' : deletedUsers;
};

module.exports = getCountDeletedController;
