const deleteArea = require("../../../controllers/areasControllers/areaCrudControllers/deleteAreaController");


const deleteAreasHandler = async (req, res) =>{
     const {id} = req.params;
    
     try {
          const deleted = await deleteArea(id);
          res.status(200).json(deleted);
     } catch (error) {
     return res.status(404).json({error: error.message});
          
     }

}

module.exports = deleteAreasHandler;