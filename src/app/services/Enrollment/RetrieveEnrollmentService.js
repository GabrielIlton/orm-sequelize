const { Errors } = require('../../utils/HTTP');
const { enrollmentRepository } = require('../../../infra/repositories');

module.exports = async ({ enrollmentId }) => {
  const enrollment = await enrollmentRepository.findOneById({ id: enrollmentId, fieldsToReturn: [''] });
  if (enrollment) throw Errors.generic.notDeleted({ fieldKey: 'Matrícula' });

  const retrieveEnrollment = await enrollmentRepository.retrieveRegisterById({ id: enrollmentId });
  if (!retrieveEnrollment) throw Errors.generic.notExists({ fieldKey: 'Matrícula' });

  return { data: { id: enrollmentId, message: 'Matrícula ativada.' } };
};
