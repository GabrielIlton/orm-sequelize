const Repository = require('./Repository');

module.exports = class WebSocketsRepository extends Repository {
  constructor ({ WebSocketsModel }) {
    super(WebSocketsModel);
  }
};
