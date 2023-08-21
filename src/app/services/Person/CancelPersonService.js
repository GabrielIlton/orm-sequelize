const { personRepository, enrollmentRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ studentId }) => {
  const student = await personRepository.findOneById({ id: studentId, fieldsToReturn: [''] });
  if (!student) throw Errors.generic.notFound({ entity: 'Estudante' });

  await personRepository.updateById({ id: studentId, modify: { active: false } });

  await enrollmentRepository.update({ filters: { student_id: studentId }, modify: { status: 'cancelado' } });

  return { data: { id: studentId, message: 'Estudante cancelado.' } };
};
