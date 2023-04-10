const getDetailController = require('../../controllers/usersControllers/getControllers/getDetailController');

const getDetailHandler = async(req, res) => {
    const { CompanyId, id } = req.params;
    console.log(req.params)
    try {
        const fileId = await getDetailController(CompanyId, id);
        return res.status(201).json(fileId);
        
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = getDetailHandler;