const Users = require('../../../models').Users;
const File = require('../../../models').File;

const putUsersController = async (id, name, lastName, email, birthDate, address, image, dni, tel, role, dateOfAdmission,PositionId , AreaId, cuil, cbu) => {
      
      const findUserById = await Users.findOne({
           where: 
               { id:id } 
      });

      if (!findUserById) throw new Error(`The user with id: ${id} doesn't exist.`)

      
      await Users.update({
       name, lastName, email, birthDate, address, image, dni, tel, role},
       {where: { id:id }
      });


      await File.update({
        dateOfAdmission, PositionId ,AreaId, cuil, cbu},
        {where: {UserId: id}
      });


      return `The user ${name} ${lastName} has been updated correctly.`


};

module.exports = putUsersController;