const getRolesHandler = require('../handlers/rolesHandlers/getRolesHandler');
const rolesRouter = require('express').Router();

rolesRouter.get('/', getRolesHandler)


module.exports = rolesRouter;