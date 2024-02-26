module.exports = (sequelize, DataTypes) => {
  const WebSockets = sequelize.define('WebSockets', {
    name: DataTypes.STRING,
    text: DataTypes.STRING
  });

  return WebSockets;
};
