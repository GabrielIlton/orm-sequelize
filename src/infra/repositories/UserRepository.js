const Repository = require('./Repository');

module.exports = class UsersRepository extends Repository {
  constructor ({ UsersModel }) {
    super(UsersModel);
  }
};
