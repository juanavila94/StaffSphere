const Users = require('../../../models').Users;
const File = require('../../../models').File;

const softDeleteUsers = async (id) => {
    
    await File.destroy({
        where:{
            UserId : id ,
        },include :[{
            model: Users.destroy({
                where: {
                    id,
                },
            })
        }]
    })
    return `The user ${id} has been deleted`;
}

module.exports = softDeleteUsers;