const getEmployeeCountController = require("../../controllers/companyControllers/getController/getEmployeeCountController");

const getEmployeeCountHandler = async (req, res) => {
    const { CompanyId } = req.params;
    try {
        const employeeCount = await getEmployeeCountController(CompanyId);
        res.status(200).json(employeeCount)
        
    } catch( error){
        res.status(400).json({error: error.message})
    }
}



module.exports = getEmployeeCountHandler;