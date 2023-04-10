const getAllUsersController = require("../../controllers/usersControllers/getControllers/getAllUsersController");

const getAllUsersHandler = async (req, res) => {

    try {
        const results = await getAllUsersController();
        res.status(200).json(results);
        
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = getAllUsersHandler;