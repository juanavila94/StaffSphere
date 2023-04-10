const Users = require("../../../models").Users;
const File = require("../../../models").File;

const postUsersController = async (
  name,
  lastName,
  email,
  birthDate,
  address,
  CompanyId,
  image,
  dni,
  tel,
  role,
  PositionId,
  AreaId,
  dateOfAdmission,
  cuil,
  cbu
) => {
    let newUser = await Users.create({
      name,
      lastName,
      email,
      birthDate,
      address,
      image,
      dni,
      tel,
      role,
      CompanyId,
    });
    const idNewUser = newUser.id;

    await File.create({
      dateOfAdmission,
      cuil,
      cbu,
      PositionId,
      AreaId,
      UserId: idNewUser,
    });

    return `The employee ${name} ${lastName} has been created correctly.`;
};

module.exports = postUsersController;
