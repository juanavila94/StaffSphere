const areasRouter = require('express').Router();
const deleteAreasHandler = require('../handlers/areasHandlers/areasCrudHandler.js/deleteAreasHandler');
const getAllAreasHandler = require('../handlers/areasHandlers/areasCrudHandler.js/getAllAreasHandler');
const postAreasHandler = require('../handlers/areasHandlers/areasCrudHandler.js/postAreasHandler');
const putAreasHandler = require('../handlers/areasHandlers/areasCrudHandler.js/putAreasHandler');
const getAreasHandler = require('../handlers/areasHandlers/getAreasHandler');


areasRouter.get('/ars/:CompanyId' ,getAllAreasHandler);
areasRouter.get('/:CompanyId',  getAreasHandler);
areasRouter.post('/',postAreasHandler);
areasRouter.put('/:id',putAreasHandler);
areasRouter.delete('/:id',deleteAreasHandler);


 module.exports = areasRouter;