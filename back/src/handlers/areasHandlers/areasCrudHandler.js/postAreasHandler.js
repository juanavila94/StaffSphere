const postArea = require("../../../controllers/areasControllers/areaCrudControllers/postAreaController");



const postAreasHandler = async ( req , res ) => {
     const { area, CompanyId } = req.body;
 

 try {
     if(!area) throw new Error ('information needed');
     else{
          const newArea = await postArea(area, CompanyId);
          return res.status(200).json(newArea)
     }
 } catch (error) {
     return res.status(400).json({error: error.message});
 }
}

module.exports = postAreasHandler;