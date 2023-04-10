const protectedRouter = require('express').Router();
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization');

protectedRouter.get('/', checkAuthorization) 

module.exports = protectedRouter