'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tasks', [{
     name: 'clean_files',
     board_id: 5,
     user_id: 7,
     createdAt: new Date(),
     updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});

  }
};