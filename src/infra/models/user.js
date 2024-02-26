module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', { user: DataTypes.STRING, password: DataTypes.STRING }, { paranoid: true });

  return Users;
};
