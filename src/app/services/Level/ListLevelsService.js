const { levelRepository } = require('../../../infra/repositories');

module.exports = async () => {
  const levels = await levelRepository.find({});

  return { data: { levels } };
};
