const Repository = require('./Repository');

module.exports = class ClassesRepository extends Repository {
  constructor ({ ClassesModel }) {
    super(ClassesModel);
  }
};
