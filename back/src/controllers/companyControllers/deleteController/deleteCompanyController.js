const Company = require('../../../models').Company;
 
const softDeleteCompany = async (id) => {
     await Company.destroy({
          where: {
              id
          }
     });
     return 'Company soft deleted successfully.';
}

module.exports = softDeleteCompany;