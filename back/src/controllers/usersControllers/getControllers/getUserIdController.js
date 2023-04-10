const Users = require("../../../models").Users;
const Company = require("../../../models").Company;
const getUserCleanDb = require("../../../utils/getUsersCleanDb");

const getUserIdController = async (id) => {
  try {
    const userIdDb = await Users.findByPk(id, {
      include: {
        model: Company,
        attributes: ["name"],
        trough: { attributes: [] },
      },
    });
    const infoTotal = await getUserCleanDb([userIdDb]);
    return infoTotal;
  } catch (error) {
    throw new Error(`The user does not exist!`);
  }
};

module.exports = getUserIdController;
