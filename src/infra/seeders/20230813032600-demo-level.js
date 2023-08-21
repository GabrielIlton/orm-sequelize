module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
      {
        description: 'basico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'avancado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
