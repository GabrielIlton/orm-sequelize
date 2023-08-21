const { basename, resolve } = require('path');
const Sequelize = require('sequelize');
const { readdirSync } = require('fs');

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

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const { People: PeopleModel, Levels: LevelsModel, Classes: ClassesModel, Enrollments: EnrollmentsModel } = db;

module.exports = { PeopleModel, LevelsModel, ClassesModel, EnrollmentsModel };
