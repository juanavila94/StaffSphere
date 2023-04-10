const Position = require ('../../../models').Position;


const deletePosition = async ( id ) => {
     
     await Position.destroy({
           where :{
               id
           }
     })
     if(!id) throw new Error ('Position not found or inexistent');

     return ('Position deleted')
}


module.exports = deletePosition;