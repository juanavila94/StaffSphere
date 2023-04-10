
const nextEvents = require("../../controllers/eventsControllers/getNextEventsControllers");


const getNextEventsHandler = async (req, res ) =>{
   const { CompanyId } = req.params;

  
   try {
      const results = await nextEvents(CompanyId);
      return res.status(200).json(results);
     
  } catch (error) {
     return res.status(400).json(error);
  }

}

module.exports = getNextEventsHandler;