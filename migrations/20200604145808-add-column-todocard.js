'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
			queryInterface.addColumn('TodoCards', 'updateDate', {
				type: Sequelize.DATE,
			}),
			queryInterface.addColumn('TodoCards', 'depth', {
				type: Sequelize.INTEGER,
				defaultValue: 0
			}),
		]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
			queryInterface.removeColumn('TodoCards', 'updateDate'),
			queryInterface.removeColumn('TodoCards', 'depth'),
		]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
