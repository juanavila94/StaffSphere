const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const File = require('../../../models').File;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getUserNameController = async(name) => {
    const dataBaseNameRaw = await File.findAll({
        include: {
            model: Users,
            attributes: ['name','lastName', 'image', 'role'],
            where: {
                name: {
                    [Op.iLike] : `%${name}%`
                }
            },  
        }
       
    });
    const cleanInfo = cleanInfoDb(dataBaseNameRaw);

    if(cleanInfo.length === 0) throw new Error(`The user with the name: '${name}' does not exist. Try with another please.`);
    return cleanInfo;
};

module.exports = getUserNameController;