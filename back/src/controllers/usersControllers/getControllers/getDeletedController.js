const File = require ('../../../models').File;
const Users = require ('../../../models').Users;
const Position = require ('../../../models').Position;
const Area = require ('../../../models').Area;
const { Op } = require('sequelize');
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getDeleted = async (CompanyId) => {
 

     const deletedUsers =  await File.findAll({
        where:{
          deletedAt : {
               [Op.ne]: null,
          }
        },paranoid: false,
        include:[{
          model:Users,
          where: {
               deletedAt : {
                    [Op.ne]: null,
               },
               CompanyId: CompanyId
          }, paranoid: false,
     },{
          model: Position ,
          attributes: ['position'],
        
      },{
          model: Area, 
          attributes :['area'],

      }]
         
     })

     const cleanResults = cleanInfoDb(deletedUsers)
     return cleanResults;
//     return deletedUsers;
}

module.exports = getDeleted;