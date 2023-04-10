const getCompanyValidateController = require('../../controllers/companyControllers/getController/getCompanyValidateController');

const getCompanyValidateHandler = async (req, res) => {
  const { name, cuit, tel, email } = req.query;
  try {
    if(name || cuit || tel || email) {
    const results = await getCompanyValidateController(name, cuit, tel, email);
    res.status(200).json(results);
  }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCompanyValidateHandler;
