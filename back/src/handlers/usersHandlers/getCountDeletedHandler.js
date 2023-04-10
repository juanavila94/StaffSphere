const getCountDeletedController = require('../../controllers/usersControllers/getControllers/getCountDeletedController');

const getCountDeletedHandler = async (req, res) => {
    const { CompanyId } = req.params;

    try {
        const results = await getCountDeletedController(CompanyId);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = getCountDeletedHandler;