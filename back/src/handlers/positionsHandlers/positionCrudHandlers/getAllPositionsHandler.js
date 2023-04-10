const getPosition = require("../../../controllers/positionsControllers/positionCrudController/getAllPositionsController");


const getAllPositionsHandler = async (req, res) => {
     const { CompanyId } = req.params; 
     try {
          const positions = await getPosition(CompanyId);
          res.status(200).json(positions);
     } catch (error) {
          res.status(400).json({error: error.message});
     }
}

module.exports = getAllPositionsHandler;