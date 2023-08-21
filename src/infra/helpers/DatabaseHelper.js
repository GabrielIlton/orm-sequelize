const { NODE_ENV } = require('../../config/Environments');
const config = require('../config/config.json')[NODE_ENV];
const Sequelize = require('sequelize');

module.exports = {
  async open () {
    try {
      const sequelize = new Sequelize(config.database, config.username, config.password, config);
      await sequelize.authenticate();

      global.env = { sequelize };

      console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error.message);
    }
  }
};
