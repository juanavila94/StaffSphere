const putEvent = require("../../controllers/eventsControllers/putEventController");


const putEventHandler = async (req, res ) => {
     const { title, description, label , day } = req.body;
     const { id } = req.params;

try {
     const putEvents = await putEvent(id , title, description, label , day)
     return res.status(200).json(putEvents);
} catch (error) {
     return res.status(400).json({error: "error en el handler"});
}     

}


module.exports = putEventHandler;