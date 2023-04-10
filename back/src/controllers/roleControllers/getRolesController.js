const getUsersController = require('../../controllers/usersControllers/getControllers/getUsersController');

const getRolesController = async (name, role, area, position) => {
    const filter = await getUsersController(name, role, area, position)

    let roles = filter.map(elem => elem.role);
    
    return  [...new Set(roles)];

}


module.exports = getRolesController;
