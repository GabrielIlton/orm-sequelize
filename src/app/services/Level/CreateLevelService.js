const { levelRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ description }) => {
  const level = await levelRepository.findOne({ filters: { description }, fieldsToReturn: [''] });
  if (level) throw Errors.generic.alreadyExists({ field: 'Nível' });

  const newLevel = await levelRepository.create({ description });

  return { data: { level: { id: newLevel.id, description } }, statusCode: 201 };
};
