const calendar = require ('../../models').calendar;


const putEvent = async (id , title, description , label, day ) => {
 
     await calendar.update({
          title, description , label, day 
     },{where:{
               id
          }
     })
   
     return `the ${title} event has been successfully updated`
}


module.exports = putEvent;