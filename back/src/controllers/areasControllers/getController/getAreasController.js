const getUsersController = require('../../usersControllers/getControllers/getUsersController');



const getAreasController = async (name, role, area, position, sort, CompanyId) => {

    const filter = await getUsersController(name, role, area, position, sort, CompanyId)


    let areas = filter.map(elem => elem.area);

    return [...new Set(areas)];


}

module.exports = getAreasController;