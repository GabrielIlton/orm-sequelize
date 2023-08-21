const { personRepository } = require('../../../infra/repositories');

module.exports = async () => {
  const people = await personRepository.find({});

  return { data: { people } };
};
