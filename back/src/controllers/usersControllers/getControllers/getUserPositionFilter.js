const { Op } = require('sequelize');
const cleanDatabaseFiltered = require('../../../utils/cleanFilterByPostitionAndArea');
const File = require('../../../models').File;
const Users = require('../../../models').Users;

const getUserPositionFilter = async (position) => {

     const filePosition = await File.findAll({
          where: {
              position: {
                    [Op.iLike] : `%${position}%`
                }

          },
          include: {
               model: Users,
               attributes: ['name', 'lastName', 'image', 'role'],
          
          }
     });
     if(filePosition.length === 0) throw Error ('the specified position does not exist');
    
     return cleanDatabaseFiltered(filePosition);
};

module.exports = getUserPositionFilter;