module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Enrollments', [
      {
        status: 'confirmado',
        student_id: 87,
        class_id: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'confirmado',
        student_id: 87,
        class_id: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'confirmado',
        student_id: 87,
        class_id: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'confirmado',
        student_id: 86,
        class_id: 52,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'cancelado',
        student_id: 88,
        class_id: 52,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'cancelado',
        student_id: 89,
        class_id: 53,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Enrollments', null, {});
  }
};
