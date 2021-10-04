'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Categories', [
      { name: 'food', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')},
      { name: 'people', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'code', createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});

  }
};
