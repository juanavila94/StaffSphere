const getRolesController = require('../../controllers/roleControllers/getRolesController');

const getRolesHandler = async (req, res) => {
    const {name, role, area, position, sort} = req.query;
    try {
        const results = await getRolesController(name, role, area, position, sort);
        res.status(200).json(results);
    }catch(error){
        res.status(400).json({error: error.message});
    }


}

module.exports = getRolesHandler;
