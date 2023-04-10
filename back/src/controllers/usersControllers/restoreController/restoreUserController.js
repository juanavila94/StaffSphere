const File = require ("../../../models").File;
const Users = require ("../../../models").Users;

const  restoreUser = async (id) =>{
      
     await File.restore({
          where:{
              UserId : id ,
          },include :[{
              model: Users.restore({
                  where: {
                      id,
                  },
                })
            }]
        })
    return `The user has been restored`;

}

module.exports = restoreUser;