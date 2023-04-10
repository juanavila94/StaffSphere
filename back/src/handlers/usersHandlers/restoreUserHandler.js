const restoreUser = require("../../controllers/usersControllers/restoreController/restoreUserController")





const restoreUserHandler =  async (req, res) => {
     const { id } = req.params

     try {
          const restore = await restoreUser(id)
          return res.status(200).json(restore);
           
     } catch (error) {
          return res.status(400).json({error: error.message})
     }
}


module.exports = restoreUserHandler;