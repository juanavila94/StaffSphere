const Company = require('../../../models').Company;


const postCompaniesController = async (name, cuit, industry, location, numberEmployees, tel, email, image, InformationId) => {
     const results = await Company.create({
        name,
        cuit,
        industry,
        location,
        numberEmployees,
        tel,
        email,
        image,
        InformationId,
    })

    return {'CompanyId': results.id} 
}

module.exports = postCompaniesController;