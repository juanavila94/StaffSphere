const getBirthdayController = require('../../controllers/usersControllers/getControllers/getBirthdayController');

const getBirthdayHandler = async(req, res) => {
    const { CompanyId } = req.params;
    try {
        const resultDate = await getBirthdayController(CompanyId);
        return res.status(201).json(resultDate);
    } catch (error) {
        return res.status(404).json(error)
    }
};

module.exports = getBirthdayHandler;