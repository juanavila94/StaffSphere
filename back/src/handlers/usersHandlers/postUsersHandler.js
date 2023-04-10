const postUsersController = require('../../controllers/usersControllers/postController/postUsersController');


const postUsersHandler = async (req, res) => {

    const { name, lastName, email, birthDate, address, image, dni, tel , role, CompanyId, PositionId, AreaId,  dateOfAdmission, cuil, cbu} = req.body;

    try {
        const newUser = await postUsersController(name, lastName, email, birthDate, address, CompanyId, image, dni, tel, role,  PositionId , AreaId , dateOfAdmission, cuil, cbu)
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = postUsersHandler;