const Company = require ('../../../models').Company;

const putCompanyController = async ( id, name, cuit, industry, location, email, numberEmployees, tel, authorized, paymentDay) => {
 
    const findCompanyById = await Company.findOne({
     where: {
        id
      }
    });

    if (!findCompanyById) throw new Error('Company not found');

    await Company.update({
     name, cuit, industry, location, email,numberEmployees, tel, authorized, paymentDay},
     {
      where: {
        id
      }
    });
    return 'Company successfully updated '
}

module.exports = putCompanyController