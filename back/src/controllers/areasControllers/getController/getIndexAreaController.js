
const { Op } = require('sequelize');
const File = require('../../../models').File;
const Area = require('../../../models').Area;
const Users = require('../../../models').Users;


 const getRetentionIndexByArea = async (CompanyId) => {
      const startOfPeriod = new Date(new Date().getFullYear(), 0, 1); // primer día del año actual
      const endOfPeriod = new Date(); // fecha actual
    
    
      const areas = await Area.findAll({
        where: {
          CompanyId: CompanyId,
        },
      });
      
      const deletedEmployees = await Promise.all(
        areas.map(async (area) =>{
          const firedEmployees = await File.findAndCountAll({
            where: {
              deletedAt : {
                [Op.ne]: null,
              },
              AreaId: area.id,
            }, paranoid: false,
            include:[{
              model:Users,
              where: {
                   deletedAt : {
                        [Op.ne]: null,
                   },
                   CompanyId: CompanyId
              }, paranoid: false,
            }],
            include: [{
              model: Area,
              attributes : ['area'],
            }]
          });
          return firedEmployees;
        })
       )
        const clean =  deletedEmployees.map((info) => {
          return {
            count: info.count,
            area: info.rows.length !== 0  ? info.rows[0].Area.area : null
          }}
          )
    
    
      
    
      
      const currentEmployees = await Promise.all(
        areas.map(async (area) =>{
          const hiredEmployees = await File.findAndCountAll({
               where: {
                AreaId: area.id,
               },
               include:[{
                model:Users,
                where: {
                  CompanyId,
                }
               }],
                include: [{
                  model: Area,
                  attributes : ['area'],
                }]
             });
          return hiredEmployees;
          })
        );

        const clean2 = currentEmployees.map((info) => {
          return {
            count: info.count,
            // id: info.rows.map(elem => elem.id),
            area: info.rows.length !== 0  ? info.rows[0].Area.area : null
          }}
        )
    
      //   // return [clean , clean2]
        // return [deletedEmployees, currentEmployees]
     
        const SumArray = (function () {
          const deleted = clean;
          const current = clean2;
          const resultArray = [];
         for ( let i = 0; i < deleted.length && i < current.length; i++) {
          const sum = {count : deleted[i].count + current[i].count, area: current[i].area};
           resultArray.push(sum);
           }
           return resultArray;
          })();
         
          let result= SumArray.map(e => e.count)
          return result;
          // total de empleados por area, tanto borrados como actuales .   




      
  };

   

// const getRetentionIndexByArea = async (companyId) => {

//   const startOfPeriod = new Date(new Date().getFullYear(), 0, 1); // primer día del año actual
//   const endOfPeriod = new Date(); // fecha actual

//   const employeesAtStart = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.lte]: startOfPeriod, // fecha de admisión anterior o igual al comienzo del periodo
//       },
//       '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//     },
//     include: [{
//       model: User,
//       attributes: [],
//       where: {
//         CompanyId: companyId // solo empleados de la compañía especificada
//       }
//     }]
//   });

//   const employeesAtEnd = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.lte]: endOfPeriod, // fecha de admisión anterior o igual al final del periodo
//       },
//       '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//     },
//     include: [{
//       model: User,
//       attributes: [],
//       where: {
//         CompanyId: companyId // solo empleados de la compañía especificada
//       }
//     }]
//   });

//   const joinedDuringPeriod = await File.count({
//     where: {
//       dateOfAdmission: {
//         [Op.between]: [startOfPeriod, endOfPeriod], // fecha de admisión dentro del periodo
//       },
//       '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//     },
//     include: [{
//       model: User,
//       attributes: [],
//       where: {
//         CompanyId: companyId // solo empleados de la compañía especificada
//       }
//     }]
//   });

//   const retentionIndex =
//     ((employeesAtEnd - joinedDuringPeriod) / employeesAtStart) * 100;

//   const areas = await Area.findAll();

//   const retentionIndexByArea = await Promise.all(
//     areas.map(async (area) => {
//       const employeesInArea = await File.count({
//         where: {
//           AreaId: area.id,
//           '$User.CompanyId$': companyId // solo empleados de la compañía especificada
//         },
//         include: [{
//           model: User,
//           attributes: [],
//           where: {
//             CompanyId: companyId // solo empleados de la compañía especificada
//           }
//         }]
//       });

//       const retentionIndexInArea =
//         ((employeesAtEnd - joinedDuringPeriod - employeesInArea) /
//           (employeesAtStart - employeesInArea)) *
//         100;

//       return {
//         area: area.area,
//         retentionIndex: retentionIndexInArea.toFixed(1),
//       };
//     })
//   );

//   return retentionIndexByArea;
// };




  module.exports = getRetentionIndexByArea;



