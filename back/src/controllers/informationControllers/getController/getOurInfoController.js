const Information = require('../../../models').Information;

const getOurInfoController = async () => {

    return await Information.findAll();

}

module.exports = getOurInfoController;