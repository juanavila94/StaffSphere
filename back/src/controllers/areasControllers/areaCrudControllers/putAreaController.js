const Area = require('../../../models').Area;


const putArea = async (id , area) => {
    
     const putArea =  await Area.findOne({
          where: {
               id
          }
     }
          );

     if(!putArea) throw new Error ('Area not found or inexistent');
     else{
          await Area.update({area},
               {
                    where:{
                         id,
                    }
               })
               
          }
     return (`successfully updated to ${area}`);
};


module.exports = putArea;     