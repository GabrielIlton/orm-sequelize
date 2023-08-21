const { enrollmentRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ enrollmentId, studentId }) => {
  const enrollment = await enrollmentRepository.findOne({ filters: { id: enrollmentId, student_id: studentId }, fieldsToReturn: [''] });
  if (!enrollment) throw Errors.generic.notFound({ entity: 'Matrícula' });

  await enrollmentRepository.deleteById({ id: enrollmentId });

  return { data: { id: enrollmentId, message: 'Matrícula deletada' } };
};
