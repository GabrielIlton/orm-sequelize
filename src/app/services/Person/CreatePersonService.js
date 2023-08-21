const { personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ name, active, email, role }) => {
  const person = await personRepository.findOne({ filters: { email }, fieldsToReturn: [''] });
  if (person) throw Errors.generic.alreadyExists({ field: 'Pessoa' });

  const newPerson = await personRepository.create({ name, active, email, role });

  return { data: { person: { id: newPerson.id, name, active, email, role } }, statusCode: 201 };
};
