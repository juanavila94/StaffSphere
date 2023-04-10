'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { Model } = require('sequelize');
// const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Companies', [
      {
        
        // id: uuidv4(),
        name: 'CocaCola',
        cuit: '123456789',
        industry: 'Beverages',
        location: 'Buenos Aires',
        numberEmployees: 10,
        image: 'https://graffica.info/wp-content/uploads/2023/02/cocacola-logo.jpeg',
        tel: '990987123',
        email: 'cocacola@gmail.com',
        authorized: true,
        paymentDay:'11-02-2023',
        InformationId: 1,
      

      },
      {
        
        // id: uuidv4(),
        name: 'Ford',
        cuit: '123456777',
        industry: 'Automotive',
        location: 'Bogota',
        numberEmployees: 20,
        image: 'https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2021/blog/legado/ford-blog-emblema-logo-historia-evolucion-siglo-diferencias-logotipo.jpg',
        tel: '990987124',
        email: 'ford@gmail.com',
        authorized: true,
        paymentDay:'12-02-2023',
        InformationId: 1,
      

      },
      {
        
        // id: uuidv4(),
        name: 'Arcor',
        cuit: '123456888',
        industry: 'Food and Beverages',
        location: 'Cordoba',
        numberEmployees: 30,
        image: 'https://i.pinimg.com/736x/f4/7e/29/f47e29ea9caa12afdfe0b9f4ab8d7c7a.jpg',
        tel: '990987125',
        email: 'arcor@gmail.com',
        authorized: true,
        paymentDay:'12-02-2023',
        InformationId: 1,
      

      },
      {
        name: 'Pepsi',
        cuit: '87654321',
        industry: 'Bebidas',
        location: 'Buenos Aires',
        numberEmployees: 10,
        image: 'https://graffica.info/wp-content/uploads/2023/02/cocacola-logo.jpeg',
        tel: '47495862',
        email: 'empresa2@gmail.com',
        authorized: true,
        paymentDay:'12-03-94',
        InformationId: 1,
      
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
