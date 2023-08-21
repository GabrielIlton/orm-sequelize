const { levelRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ levelId }) => {
  const level = await levelRepository.findOneById({ id: levelId, fieldsToReturn: [''] });
  if (level) throw Errors.generic.notDeleted({ fieldKey: 'Nível' });

  const retrieveLevel = await levelRepository.retrieveRegisterById({ id: levelId });
  if (!retrieveLevel) throw Errors.generic.notExists({ fieldKey: 'Nível' });

  return { data: { id: levelId, message: 'Nível ativado.' } };
};
