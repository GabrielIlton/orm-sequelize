const { personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ personId }) => {
  const person = await personRepository.findOneById({ id: personId });
  if (!person) throw Errors.generic.notFound({ entity: 'Pessoa' });

  return { data: { person } };
};
