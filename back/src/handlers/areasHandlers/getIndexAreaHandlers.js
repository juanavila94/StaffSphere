const getRetentionIndexByArea = require("../../controllers/areasControllers/getController/getIndexAreaController");


const getIndexAreaHandler = async (req, res) => {
  const { CompanyId } = req.params;
    try {
       
      const results = await getRetentionIndexByArea(CompanyId);
     
      res.status(200).json(results);
    
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = getIndexAreaHandler;