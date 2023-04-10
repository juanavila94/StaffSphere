const informationRouter = require('express').Router();
const getOurInfoHandler = require('../handlers/informationHandlers/getOurInfoHandler');


informationRouter.get('/', getOurInfoHandler);


module.exports = informationRouter;