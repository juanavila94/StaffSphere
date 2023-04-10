const companiesRouter = require('express').Router();
const validatePostCompanies = require('../middlewares/companyMiddlewares/validatePostCompanies');
const validateCompanyUpdate = require('../middlewares/companyMiddlewares/validatePutCompany');
const softDeleteCompanyHandler = require('../handlers/companyHandlers/softDeleteCompanyHandler');
const softDeleteCompany = require('../middlewares/companyMiddlewares/validateSoftDeleteCompany');
const postCompaniesHandler = require('../handlers/companyHandlers/postCompaniesHandler');
const putCompanyHandler = require('../handlers/companyHandlers/putCompanyHandler');
const getCompanyValidateHandler = require('../handlers/companyHandlers/getCompanyValidateHandler');
const getCompanyInfoHandler = require('../handlers/companyHandlers/getCompanyInfoHandler');
const getEmployeeCountHandler = require('../handlers/companyHandlers/getEmployeeCountHandler');


companiesRouter.get('/', getCompanyValidateHandler);
companiesRouter.get('/:CompanyId', getCompanyInfoHandler);
companiesRouter.get('/:CompanyId/employeeCount', getEmployeeCountHandler);
companiesRouter.post('/register', validatePostCompanies, postCompaniesHandler)
companiesRouter.delete('/:id', softDeleteCompany, softDeleteCompanyHandler);
companiesRouter.put('/:id', validateCompanyUpdate, putCompanyHandler);


module.exports = companiesRouter;