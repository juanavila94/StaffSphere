const putArea = require("../../../controllers/areasControllers/areaCrudControllers/putAreaController");



const putAreasHandler = async (req, res) => {
     const {  area } = req.body;
     const { id } = req.params;

     try {
          if( id && (area)){
             const areaUpdated = await putArea(id, area);
             res.status(200).json(areaUpdated)
          }
          
     } catch (error) {
     return res.status(400).json({error:error.message}); 
          
     }
}

module.exports = putAreasHandler;