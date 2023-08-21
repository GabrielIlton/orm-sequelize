const Repository = require('./Repository');

module.exports = class LevelsRepository extends Repository {
  constructor ({ LevelsModel }) {
    super(LevelsModel);
  }
};
