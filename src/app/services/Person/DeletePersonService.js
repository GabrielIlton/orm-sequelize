const { personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ personId }) => {
  const person = await personRepository.findOneById({ id: personId, fieldsToReturn: [''] });
  if (!person) throw Errors.generic.notFound({ entity: 'Pessoa' });

  await personRepository.deleteById({ id: personId });

  return { data: { id: personId, message: 'Pessoa deletada' } };
};
