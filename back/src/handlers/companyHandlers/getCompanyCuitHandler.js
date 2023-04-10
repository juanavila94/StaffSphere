const getCompanyCuitController = require("../../controllers/companyControllers/getController/getCompanyCuitController");

const getCompanyCuitHandler = async (req, res) => {

    const { cuit } = req.query
    try {
        const results = await getCompanyCuitController(cuit);
        res.status(200).json(results)
        


    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getCompanyCuitHandler;