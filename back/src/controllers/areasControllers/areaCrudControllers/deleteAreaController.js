const Area = require('../../../models').Area;


const deleteArea = async (id) => {

     await Area.destroy({
        where :{
         id : id
        }
    })

    if(!id) throw new Error ('Area not found or inexistent');

    return ('Area deleted')
};


module.exports = deleteArea;