'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Files', [
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '542335141',
        cbu: '170204634545000087867',
        UserId:1,
        AreaId:3,
        PositionId:3,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '422280335141',
        cbu: '745404663454300087867',
        UserId:2,
        AreaId:2,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '5428033141',
        cbu: '155220466034500087867',
        UserId:3,
        AreaId:2,
        PositionId:4,
      },
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '32280335141',
        cbu: '1225404665700087867',
        UserId:4,
        AreaId:1,
        PositionId:1,
      },
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '2728035141',
        cbu: '15422046600567087867',
        UserId:5,
        AreaId:3,
        PositionId:3,
      },
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '1280335141',
        cbu: '5742046603406087867',
        UserId:6,
        AreaId:2,
        PositionId:2,
      },
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '12280234251',
        cbu: '5742046602340087867',
        UserId:7,
        AreaId:1,
        PositionId:7,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '1228023433451',
        cbu: '5742046603430087867',
        UserId:8,
        AreaId:5,
        PositionId:2,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '123454321',
        cbu: '574204660005647867',
        UserId:9,
        AreaId:2,
        PositionId:7,
      },
      {
        
        dateOfAdmission: '2022-10-02',
        cuil: '1284534541',
        cbu: '57420468987000087867',
        UserId:10,
        AreaId:3,
        PositionId:3,
      },
      {
        

        dateOfAdmission: '2022-10-02',
        cuil: '122803453451',
        cbu: '57420466054430087867',
        UserId:11,
        AreaId:1,
        PositionId:1,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '123453451',
        cbu: '57420466443543087867',
        UserId:12,
        AreaId:2,
        PositionId:4,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '1228234241',
        cbu: '57420462343200087867',
        UserId:13,
        AreaId:1,
        PositionId:6,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '122832423441',
        cbu: '574204663240087867',
        UserId:14,
        AreaId:1,
        PositionId:6,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '12280332342341',
        cbu: '5742046601233087867',
        UserId:15,
        AreaId:1,
        PositionId:7,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '122802342341',
        cbu: '57420466123123087867',
        UserId:16,
        AreaId:4,
        PositionId:5,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '1228023423441',
        cbu: '5742046600123127867',
        UserId:17,
        AreaId:6,
        PositionId:8,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '12282342341',
        cbu: '57420466001231230087867',
        UserId:18,
        AreaId:6,
        PositionId:8,
      },{
        

        dateOfAdmission: '2022-10-02',
        cuil: '1228032342341',
        cbu: '5742041231230087867',
        UserId:19,
        AreaId:7,
        PositionId:9,
      },
      {
        

        dateOfAdmission: '2022-08-10',
        cuil: '1128032342341',
        cbu: '5741041231230087867',
        UserId:20,
        AreaId:7,
        PositionId:9,
      },
        
      
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
