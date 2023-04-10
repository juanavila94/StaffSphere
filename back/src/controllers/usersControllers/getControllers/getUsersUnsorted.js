const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const File = require('../../../models').File;
const Area = require('../../../models').Area;
const Position = require('../../../models').Position;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getUsersUnsorted = async(CompanyId) => {


        const dataBaseUsers = await File.findAll({
            include:[ {
                model: Users,
                attributes: ['name', 'lastName', 'image', 'role' , 'email', 'CompanyId'],
                where: {
                    CompanyId: {
                        [Op.eq] : CompanyId
                    }
                }
            }, {
                model: Area,
                attributes: ['area'] ,          
             }, {
                model: Position,
                attributes : ['position'],
             }]
        });
        
        const infoClean = cleanInfoDb(dataBaseUsers);
    
        if(infoClean.length === 0) throw new Error(`The database has failed, please try again later!`)
        
        return infoClean;

}

module.exports = getUsersUnsorted;
