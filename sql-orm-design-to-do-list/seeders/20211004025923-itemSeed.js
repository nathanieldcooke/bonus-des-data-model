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
    return queryInterface.bulkInsert('Items', [
      // food-1 people-2 code-3
      { text: 'cook the food', categoryId: 1, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')},
      { text: 'let the food cool', categoryId: 1, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { text: 'eat the food', categoryId: 1, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },

      { text: 'help people', categoryId: 2, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { text: 'be helped by people', categoryId: 2, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },


      { text: 'think of code', categoryId: 3, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { text: 'learn to code', categoryId: 3, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { text: 'apply what you\'ve learned', categoryId: 3, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { text: 'realize there is more to learn', categoryId: 3, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Items', null, {});

  }
};
