const getCompanyInfoController = require("../../controllers/companyControllers/getController/getCompanyInfoController");

const getCompanyInfoHandler = async (req, res) => {

    const { CompanyId } = req.params;

    try {
        const results = await getCompanyInfoController(CompanyId);
        res.status(200).json(results);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = getCompanyInfoHandler;