const { personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ personId, name, active, email, role }) => {
  const person = await personRepository.findOneById({ id: personId, fieldsToReturn: [''] });
  if (!person) throw Errors.generic.notFound({ entity: 'Pessoa' });

  await personRepository.updateById({ id: personId, modify: { name, active, email, role } });

  return { data: { id: personId, message: 'Pessoa atualizada.' } };
};
