const getAreasController = require("../../controllers/areasControllers/getController/getAreasController");

const getAreasHandler = async (req, res) => {
    const {name, role, area, position, sort} = req.query;
    const { CompanyId } = req.params;
    try {
        const results = await getAreasController(name, role, area, position, sort, CompanyId);
        res.status(200).json(results);
    }catch(error){
        res.status(400).json({error: error.message});
    }


}

module.exports = getAreasHandler;