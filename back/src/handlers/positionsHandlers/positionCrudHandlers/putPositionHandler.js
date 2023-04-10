const putPosition = require("../../../controllers/positionsControllers/positionCrudController/putPositionController");


const putPositionsHandler = async (req, res ) => {
     const { position } = req.body;
     const { id } = req.params;

     try {
          if( id && (position)){
             const positionUpdated = await putPosition(id, position);
             res.status(200).json(positionUpdated)
          }
          
     } catch (error) {
     return res.status(400).json({error: error.message});
          
     }
}

module.exports = putPositionsHandler;