const eventsRouter = require('express').Router();
const deleteEventHandler = require('../handlers/eventsHandlers/deleteEventHandler');
const getEventsHandler = require('../handlers/eventsHandlers/getEventHandler');
const getNextEventsHandler = require('../handlers/eventsHandlers/getNextEventsHandlers');
const postEventsHandler = require('../handlers/eventsHandlers/postEventHandler');
const putEventHandler = require('../handlers/eventsHandlers/putEventHandler');




eventsRouter.post('/', postEventsHandler)
eventsRouter.get('/next/:CompanyId', getNextEventsHandler)
eventsRouter.get('/:CompanyId', getEventsHandler)
eventsRouter.put('/:id',putEventHandler)
eventsRouter.delete('/:id',deleteEventHandler)
module.exports = eventsRouter;