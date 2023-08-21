const ReturnFieldsConsultHelper = require('../helpers/ReturnFieldsConsultHelper');

module.exports = class Repository {
  constructor (model) { this.model = model; }

  async create (data) {
    return this.model.create(data);
  }

  async find ({ filters = {}, fieldsToReturn = null, fieldsToNotReturn = null }) {
    return this.model.findAll({ where: filters, ...ReturnFieldsConsultHelper({ fieldsToReturn, fieldsToNotReturn }) });
  }

  async findOne ({ filters = {}, fieldsToReturn = null, fieldsToNotReturn = null }) {
    return this.model.findOne({ where: filters, ...ReturnFieldsConsultHelper({ fieldsToReturn, fieldsToNotReturn }) });
  }

  async findOneById ({ id, fieldsToReturn = null, fieldsToNotReturn = null }) {
    return this.model.findOne({ where: { id: Number(id) }, ...ReturnFieldsConsultHelper({ fieldsToReturn, fieldsToNotReturn }) });
  }

  async findOneAndUpdateById ({ id, modify, fieldsToReturn = null, fieldsToNotReturn = null }) {
    await this.model.update(modify, { where: { id: Number(id) } });

    return this.findOneById({ id, fieldsToNotReturn, fieldsToReturn });
  }

  async update ({ filters, modify }) {
    return this.model.update(modify, { where: filters });
  }

  async updateById ({ id, modify }) {
    return this.model.update(modify, { where: { id: Number(id) } });
  }

  async delete ({ filters }) {
    return this.model.destroy({ where: filters });
  }

  async deleteById ({ id }) {
    return this.model.destroy({ where: { id: Number(id) } });
  }

  async retrieveRegisterById ({ id }) {
    return this.model.restore({ where: { id: Number(id) } });
  }
};
