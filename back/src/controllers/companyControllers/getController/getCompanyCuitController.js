const Company = require('../../../models').Company;


const getCompanyCuitController = async (cuit) => {

    const results = await Company.findOne({
        where: {
            cuit: cuit
        }
    })

    if (results) (`${cuit}`)

    return 'Company able to be registered.';
}

module.exports = getCompanyCuitController;