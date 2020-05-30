'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Hugo',
        lastname: 'Roca',
        phone: '0000000',
        email: 'hugo@roca.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'test',
        lastname: 'test',
        phone: '0000000',
        email: 'test@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
