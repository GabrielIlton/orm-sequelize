module.exports = (sequelize, DataTypes) => {
  const Enrollments = sequelize.define('Enrollments', { status: DataTypes.STRING }, { paranoid: true });

  Enrollments.associate = function ({ People, Classes }) {
    Enrollments.belongsTo(People, { foreignKey: 'student_id' });
    Enrollments.belongsTo(Classes, { foreignKey: 'class_id' });
  };

  return Enrollments;
};
