module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classes', [
      {
        start_date: '2020-02-01',
        level_id: 47,
        teacher_id: 91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: '2020-02-01',
        level_id: 47,
        teacher_id: 91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: '2020-02-01',
        level_id: 47,
        teacher_id: 91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: '2020-07-01',
        level_id: 47,
        teacher_id: 91,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classes', null, {});
  }
};
