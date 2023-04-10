const sendGrid = require('express').Router();
const sendGridHandler = require('../handlers/sendGridHandler/sendGridHandler');
const sendGridHandlerAuto = require('../handlers/sendGridHandler/sendGridHandlerAuto');
const validatePostSendGrid = require('../middlewares/validatePostSendGrid');
const validatePostSendGridEmail = require('../middlewares/validatePostSendGridEmail');
const sendGridBrithdayHandler = require('../handlers/sendGridHandler/sendGridBrithdayHandler');

sendGrid.post('/', validatePostSendGrid, sendGridHandler);
sendGrid.post('/birthday', validatePostSendGridEmail, sendGridBrithdayHandler);
sendGrid.post('/confirmation', validatePostSendGridEmail, sendGridHandlerAuto);

module.exports = sendGrid;