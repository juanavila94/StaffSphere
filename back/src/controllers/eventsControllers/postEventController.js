const calendar = require ('../../models').calendar;


const postEvents = async ( title, description, label, day , id, CompanyId) => {
      
     const events = await calendar.create({
          title,
          description,
          label,
          day,
          id,
          CompanyId,
     })

     if(events){
     return (`The ${title} event has been succesfully created.`)
     } else {
          return (`The ${title} event can't be created due to controller's problems.`)
     }
   
}

module.exports = postEvents;