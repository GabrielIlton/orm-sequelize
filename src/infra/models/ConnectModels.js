const { basename, resolve } = require('path');
const Sequelize = require('sequelize');
const { readdirSync } = require('fs');

module.exports = () => {
  const db = {};

  const { sequelize } = global.env;

  const currentFileName = basename(__filename);
  const modelsPath = '../models';

  readdirSync(resolve(__dirname, modelsPath))
    .filter(file => file !== currentFileName)
    .forEach(file => {
      const model = require(`${modelsPath}/${file}`)(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });

  const models = {};

  for (const modelName in db) {
    if (db[modelName].associate) db[modelName].associate(db);

    Object.assign(models, { [`${modelName}Model`]: db[modelName] });
  }

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return { ...models };
};
