const getCompanyCleanDb = require('../../../utils/getCompanyCleanDb');

const Company = require('../../../models').Company;

const getCompanyInfoController = async (CompanyId) => {

const results = await Company.findOne({
    where: {
        id: CompanyId
    }
})

if (!results) throw new Error (`The company doesn't exist.`);

const cleanResults = getCompanyCleanDb(results)
return cleanResults;
}

module.exports = getCompanyInfoController;