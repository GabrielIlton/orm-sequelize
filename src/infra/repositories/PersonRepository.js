const ReturnFieldsConsultHelper = require('../helpers/ReturnFieldsConsultHelper');
const Repository = require('./Repository');

module.exports = class PeopleRepository extends Repository {
  #PeopleModel;
  constructor ({ PeopleModel }) {
    super(PeopleModel);
    this.#PeopleModel = PeopleModel;
  }

  async findAllWithScopeAll ({ filters = {}, fieldsToReturn = null, fieldsToNotReturn = null }) {
    return this.#PeopleModel.scope('all').findAll({ where: filters, ...ReturnFieldsConsultHelper({ fieldsToReturn, fieldsToNotReturn }) });
  }

  async updateByIdWithTransaction ({ id, modify, transaction }) {
    return this.model.update(modify, { where: { id: Number(id) } }, { transaction });
  }
};
