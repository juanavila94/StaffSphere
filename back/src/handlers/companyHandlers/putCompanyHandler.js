const putCompanyController = require('../../controllers/companyControllers/putController/putCompanyController');

const putCompanyHandler = async (req, res) => {
     const { name, cuit, industry, location, email, numberEmployees, tel, authorized } = req.body;
     const { id } = req.params;

     try {
          const updateCompany = await putCompanyController(id,name, cuit, industry, location, email, numberEmployees, tel, authorized)
           return res.status(200).json(updateCompany);
     } 
     catch (error) {
          return res.status(400).json({ message: error.message });
     }
}

module.exports = putCompanyHandler;