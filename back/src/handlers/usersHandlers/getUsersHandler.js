const getUsersController = require("../../controllers/usersControllers/getControllers/getUsersController");
const getUsersUnsorted = require("../../controllers/usersControllers/getControllers/getUsersUnsorted.js");

const getUsersHandler = async (req, res) => {
  const { name, role, area, position, sort} = req.query;
  const {CompanyId} = req.params;
  console.log(req.params)
  console.log(req.query)
  
  try {
    if (CompanyId  && (name || role || area || position || sort)) {
      const resultsUsers = await getUsersController(
        name,
        role,
        area,
        position,
        sort,
        CompanyId
      );
      return res.status(201).json(resultsUsers);
    } else {
      const resultUsers = await getUsersUnsorted(CompanyId);
      return res.status(200).json(resultUsers);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getUsersHandler
