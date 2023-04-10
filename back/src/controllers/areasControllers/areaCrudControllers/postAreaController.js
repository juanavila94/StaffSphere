const Area = require('../../../models').Area;


const postArea = async (area, CompanyId) =>{

     const newArea = await Area.findOrCreate({
          where: {
               area,
               CompanyId
          }
          
     
     })
     return newArea;
}


module.exports = postArea ; 