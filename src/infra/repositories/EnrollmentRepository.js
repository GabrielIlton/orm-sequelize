const ReturnFieldsConsultHelper = require('../helpers/ReturnFieldsConsultHelper');
const Repository = require('./Repository');

module.exports = class EnrollmentsRepository extends Repository {
  #EnrollmentsModel;

  constructor ({ EnrollmentsModel }) {
    super(EnrollmentsModel);
    this.#EnrollmentsModel = EnrollmentsModel;
  }

  async findAllAndCount ({ filters = {}, fieldsToReturn = null, fieldsToNotReturn = null, limit }) {
    return this.#EnrollmentsModel.findAndCountAll({ where: filters, ...ReturnFieldsConsultHelper({ fieldsToReturn, fieldsToNotReturn }), limit });
  }

  async findAllFullClass ({ filters = {}, fieldsToReturn = null, fieldsToNotReturn = null, classLimit }) {
    const { sequelize } = global.env;

    return this.#EnrollmentsModel.findAndCountAll({
      having: sequelize.literal(`count(class_id) >= ${classLimit} `),
      ...ReturnFieldsConsultHelper({ fieldsToReturn, fieldsToNotReturn }),
      group: ['class_id'],
      where: filters
    });
  }
};
