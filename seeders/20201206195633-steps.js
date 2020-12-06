'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('steps', [{
     name: 'step 1',
     description: 'read the files',
     struggles: 'not sure if I need to delete them',
     task_id: 5,
     struggles: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('steps', null, {});

  }
};