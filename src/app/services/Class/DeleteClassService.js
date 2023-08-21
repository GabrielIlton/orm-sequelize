const { classRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ classId }) => {
  const classFind = await classRepository.findOneById({ id: classId, fieldsToReturn: [''] });
  if (!classFind) throw Errors.generic.notFound({ entity: 'Classe' });

  await classRepository.deleteById({ id: classId });

  return { data: { id: classId, message: 'Classe deletada' } };
};
