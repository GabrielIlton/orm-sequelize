const { personRepository } = require('../../../infra/repositories');

module.exports = async () => {
  const people = await personRepository.findAllWithScopeAll({});

  return { data: { people } };
};
