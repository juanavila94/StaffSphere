const softDeleteUsers = require("../../controllers/usersControllers/deleteControllers/deleteUsersController");

const softDeleteHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const userDeleted = await softDeleteUsers(id);
    return res.status(200).json(userDeleted);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = softDeleteHandler;
