const cleanAllUsers = require('../../../utils/cleanAllUsers');

const File = require('../../../models').File;
const Users = require('../../../models').Users;

const getAllUsersController = async () => {

const results = await File.findAll({
    include: {
        model: Users
    }
})

if(!results) throw new Error ('There are no users yet.');

const cleanResults = cleanAllUsers(results);
return cleanResults;
}


module.exports = getAllUsersController;