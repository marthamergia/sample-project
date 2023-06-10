'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('client', 'newName', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    const rows = await queryInterface.sequelize.query(
      'SELECT name FROM client'
    );

    console.log('Name:', rows[0].map(row => row.name));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('client', 'newNme');
  },
};
