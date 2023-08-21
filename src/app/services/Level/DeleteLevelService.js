const { levelRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ levelId }) => {
  const level = await levelRepository.findOneById({ id: levelId, fieldsToReturn: [''] });
  if (!level) throw Errors.generic.notFound({ entity: 'Nível' });

  await levelRepository.deleteById({ id: levelId });

  return { data: { id: levelId, message: 'Nível deletado.' } };
};
