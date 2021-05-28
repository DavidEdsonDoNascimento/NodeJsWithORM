'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Classrooms', 'status', { type: Sequelize.BOOLEAN }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([ 
      queryInterface.removeColumn('Classrooms', 'status')
    ])
  }
};