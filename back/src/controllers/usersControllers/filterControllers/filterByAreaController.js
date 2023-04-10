const Users = require('../../../models').Users;
const File = require('../../../models').File;
const { Op } = require('sequelize');
const cleanDatabaseFiltered = require('../../../utils/cleanFilterByPostitionAndArea');

const filterByAreaController = async(area) => {

    const dataBaseFilteredRaw = await File.findAll({
        where: {
            area: {
                [Op.iLike] : `%${area}%`
            }
        },
        include: {
            model: Users,
            attributes: ['name', 'lastName', 'image', 'role']
        }
    });
    if(dataBaseFilteredRaw.length === 0) throw new Error (`The area: ${area} doesn't exist. Please try with another one.`)
    return cleanDatabaseFiltered(dataBaseFilteredRaw);
}

module.exports = filterByAreaController;