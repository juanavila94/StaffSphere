const getValidateUserController = require("../../controllers/usersControllers/getControllers/getValidateUserController");

const getValidateUserHandler = async (req, res) => {
  const { email, dni, tel, cuil, cbu } = req.query;
  try {
    if (email || dni || tel || cuil || cbu) {
      const results = await getValidateUserController(email, dni, tel, cuil, cbu);
      return res.status(201).json(results);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getValidateUserHandler;
