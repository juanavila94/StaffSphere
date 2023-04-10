const calendar = require ('../../models').calendar;

const getEvents = async (CompanyId) => {

 const results =   await calendar.findAll({
     where:{
          CompanyId: CompanyId
     }
   });
  
    return results;
}

module.exports = getEvents;
