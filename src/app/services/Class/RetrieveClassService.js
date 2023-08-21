const { classRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ classId }) => {
  const classFind = await classRepository.findOneById({ id: classId, fieldsToReturn: [''] });
  if (classFind) throw Errors.generic.notDeleted({ fieldKey: 'Classe' });

  const retrieveClass = await classRepository.retrieveRegisterById({ id: classId });
  if (!retrieveClass) throw Errors.generic.notExists({ fieldKey: 'Classe' });

  return { data: { id: classId, message: 'Classe ativada.' } };
};
