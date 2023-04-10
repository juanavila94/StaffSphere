const deleteEvent = require('../../controllers/eventsControllers/deleteEventController');

const deleteEventHandler = async (req , res ) => {
    const { id } = req.params; 

    try {
      const deletedEvent = await deleteEvent(id);
      return res.status(200).json(deletedEvent);
    } catch (error) {
     return res.status(400).json({ error : error.message });
    }

}

module.exports = deleteEventHandler;