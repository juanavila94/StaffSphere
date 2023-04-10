const getEvents = require ('../../controllers/eventsControllers/getEventController');

const getEventsHandler = async (req,res) => {
  const { CompanyId } = req.params;

  try {
     const results = await getEvents(CompanyId);
  return res.status(200).json(results);
  } catch (error) {
     return res.status(400).json({ error: error.message });
     
  }

}

module.exports = getEventsHandler;