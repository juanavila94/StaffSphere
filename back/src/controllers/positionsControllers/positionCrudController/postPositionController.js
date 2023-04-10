const Position = require ('../../../models').Position;


const postPosition = async (position, CompanyId) =>{

     const newPosition = await Position.findOrCreate({
         where:{
          position,
          CompanyId
         }
     })
     return newPosition
};


module.exports = postPosition;