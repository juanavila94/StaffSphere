const postEvents = require ('../../controllers/eventsControllers/postEventController');

const postEventsHandler = async (req , res) => {
     const { title, description, label, day , id, CompanyId } =req.body;

try {
     const postEvent = await postEvents(title, description, label, day , id, CompanyId);
     return res.status(200).json(postEvent);
     
} catch (error) {
     return res.status(400).json({error: error.message});
}

};

module.exports = postEventsHandler;