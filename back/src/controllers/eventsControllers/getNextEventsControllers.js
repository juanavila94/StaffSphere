const calendar = require ('../../models').calendar;
const { sequelize } = require("../../models");
const { Op } = require('sequelize');

const nextEvents = async (CompanyId) => {

     const today = new Date();
     const nextTenDays = [];
     for (let i = 0; i <= 30; i++) {
       const nextDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
       const nextDay = nextDate.getDate();
       const nextMonth = nextDate.getMonth() + 1;
       nextTenDays.push(`${nextMonth}-${nextDay}`);
     }
     const todayDay = today.getDate();
     const todayMonth = today.getMonth() + 1;
     const todayBirthday = `${todayMonth}-${todayDay}`;
   
     const events = await calendar.findAll({
       attributes: [
         "id",
         "title",
         "description",
         "label",
         "day",
         [
           sequelize.fn("date_part", "day", sequelize.col("day")),
           "Day",
         ],
         [
           sequelize.fn("date_part", "month", sequelize.col("day")),
           "Month",
         ],
       ],
       where: {
         [Op.and]: [
           { CompanyId: CompanyId },
           { day: { [Op.not]: null } },
           {
             [Op.or]: [
               ...nextTenDays.map((date) => {
                 return {
                   day: {
                     [Op.and]: [
                       sequelize.where(
                         sequelize.fn(
                           "date_part",
                           "month",
                           sequelize.col("day")
                         ),
                         "=",
                         date.split("-")[0]
                       ),
                       sequelize.where(
                         sequelize.fn(
                           "date_part",
                           "day",
                           sequelize.col("day")
                         ),
                         "=",
                         date.split("-")[1]
                       ),
                     ],
                   },
                 };
               }),
               {
                 day: {
                   [Op.and]: [
                     sequelize.where(
                       sequelize.fn(
                         "date_part",
                         "month",
                         sequelize.col("day")
                       ),
                       "=",
                       todayMonth
                     ),
                     sequelize.where(
                       sequelize.fn(
                         "date_part",
                         "day",
                         sequelize.col("day")
                       ),
                       "=",
                       todayDay
                     ),
                   ],
                 },
               },
             ],
           },
         ],
       },
       order: [
         sequelize.fn("date_part", "month", sequelize.col("day")),
         sequelize.fn("date_part", "day", sequelize.col("day")),
       ],
     });
     return !events.length ? "There are no upcoming events" : events;
     
       
}

module.exports = nextEvents;