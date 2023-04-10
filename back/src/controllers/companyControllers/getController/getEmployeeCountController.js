const Company = require ('../../../models').Company;
const Users = require('../../../models').Users;

const getEmployeeCountController = async (CompanyId) => {
    
    const company = await Company.findByPk(CompanyId, {
        include: {
            model: Users
        }
    });

    if(!company) throw new Error ('Company not found');
    
    let employeeCount = company.Users.length;

    return employeeCount;

}

module.exports = getEmployeeCountController;