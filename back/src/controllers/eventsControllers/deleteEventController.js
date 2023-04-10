const calendar = require ('../../models').calendar;

const deleteEvent = async (id) => {

   await calendar.destroy({
     where:{
          id
     }
   })
   return ` the event ${id} was deleted`
}


module.exports = deleteEvent;