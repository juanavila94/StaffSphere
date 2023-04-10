const Position = require ('../../../models').Position;


const putPosition = async (id, position) =>{
     const putPosition = await Position.findOne({
      id
     })
 
     if(!putPosition) throw new Error ("Position not found")
 
      await Position.update({position},{
           where: {
                id
           }
      })
      return
 }

 module.exports = putPosition;