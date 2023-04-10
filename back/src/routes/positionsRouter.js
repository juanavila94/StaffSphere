const positionsRouter = require('express').Router();

const getPositionsHandler = require('../handlers/positionsHandlers/getPositionsHandler');
const deletePositionsHandler = require('../handlers/positionsHandlers/positionCrudHandlers/deletePositionsHandler');
const getAllPositionsHandler = require('../handlers/positionsHandlers/positionCrudHandlers/getAllPositionsHandler');
const postPositionsHandler = require('../handlers/positionsHandlers/positionCrudHandlers/postPositionHandler');
const putPositionsHandler = require('../handlers/positionsHandlers/positionCrudHandlers/putPositionHandler');



positionsRouter.get('/raw/:CompanyId' ,getAllPositionsHandler);
positionsRouter.get('/:CompanyId', getPositionsHandler);
positionsRouter.post('/', postPositionsHandler);
positionsRouter.put('/:id',putPositionsHandler);
positionsRouter.delete('/:id', deletePositionsHandler);


module.exports = positionsRouter;