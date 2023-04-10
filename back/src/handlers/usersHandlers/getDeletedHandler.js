const getDeleted = require("../../controllers/usersControllers/getControllers/getDeletedController");


const getDeletedHandler = async (req , res) => {
       const { CompanyId } = req.params;

     try {
          const deleted = await getDeleted(CompanyId);
          return res.status(200).json(deleted);  
     } catch (error) {
          return res.status(400).json({error: error.message});
     }
}


module.exports = getDeletedHandler;