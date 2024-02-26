const { NODE_ENV } = require('../../config/Environments');
const config = require('../config/config.json')[NODE_ENV ?? 'test'];
const Sequelize = require('sequelize');

module.exports = {
  async open () {
    const sequelize = new Sequelize(config.database, config.username, config.password, config);
    if (config.database !== 'english_school_test') await sequelize.authenticate();

    global.env = { sequelize };

    return sequelize;
  }
};
