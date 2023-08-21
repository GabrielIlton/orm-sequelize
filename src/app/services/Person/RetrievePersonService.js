const { personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ personId }) => {
  const person = await personRepository.findOneById({ id: personId, fieldsToReturn: [''] });
  if (person) throw Errors.generic.notDeleted({ fieldKey: 'Pessoa' });

  const retrievePerson = await personRepository.retrieveRegisterById({ id: personId });
  if (!retrievePerson) throw Errors.generic.notExists({ fieldKey: 'Pessoa' });

  return { data: { id: personId, message: 'Pessoa ativada.' } };
};
