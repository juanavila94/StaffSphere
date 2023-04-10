const getArea = require("../../../controllers/areasControllers/areaCrudControllers/getAllAreasController")


const getAllAreasHandler = async (req , res ) => {
     const { CompanyId } = req.params
     try {
          const getAllAreas = await getArea(CompanyId);
          res.status(200).json(getAllAreas)
     } catch (error) {
          return res.status(400).json({error: error.message})
     }

}


module.exports = getAllAreasHandler;