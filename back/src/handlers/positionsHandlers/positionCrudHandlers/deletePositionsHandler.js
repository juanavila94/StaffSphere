const deletePosition = require ('../../../controllers/positionsControllers/positionCrudController/deletePositionController')

const deletePositionsHandler = async (req , res) => {
     const {id} = req.params;
    
     try {
          const deleted = await deletePosition(id);
          res.status(200).json(deleted);
     } catch (error) {
     return res.status(404).json({error: error.message});
          
     }
}

module.exports = deletePositionsHandler;