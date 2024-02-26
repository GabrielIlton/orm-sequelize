module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('Levels', { description: DataTypes.STRING }, { paranoid: true });

  Levels.associate = function ({ Classes }) {
    Levels.hasMany(Classes, { foreignKey: 'level_id' });
  };

  return Levels;
};
