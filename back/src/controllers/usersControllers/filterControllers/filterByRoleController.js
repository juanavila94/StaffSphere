const Users = require('../../../models').Users;
const File = require('../../../models').File;
const { Op } = require('sequelize')
const cleanDatabase = require('../../../utils/cleanFilterByRole')

const filterByRoleController = async (role) => {

    const dataBaseFilteredRaw = await File.findAll({
        include: {
            model: Users,
            attributes:['name', 'lastName', 'image', 'role'],
            where:{
                [Op.iLike]: `%${role}%`
            }
        }

        
    })
    
    return cleanDatabase(dataBaseFilteredRaw);

};

module.exports = filterByRoleController;