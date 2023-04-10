const getFileIdController = require('../../controllers/usersControllers/getControllers/getFileIdController');

const getUserAndFileIdHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const fileId = await getFileIdController(id);
        return res.status(201).json(fileId);
        
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = getUserAndFileIdHandler;