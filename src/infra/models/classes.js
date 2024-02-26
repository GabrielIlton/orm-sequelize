module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', { start_date: DataTypes.DATEONLY }, { paranoid: true });

  Classes.associate = function ({ Enrollments, People, Levels }) {
    Classes.hasMany(Enrollments, { foreignKey: 'class_id' });
    Classes.belongsTo(People, { foreignKey: 'teacher_id' });
    Classes.belongsTo(Levels, { foreignKey: 'level_id' });
  };

  return Classes;
};
