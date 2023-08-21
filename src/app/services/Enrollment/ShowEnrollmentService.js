const { personRepository, enrollmentRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ studentId, enrollmentId }) => {
  const student = await personRepository.findOneById({ id: studentId });
  if (!student) throw Errors.generic.notFound({ entity: 'Estudante' });

  const enrollment = await enrollmentRepository.findOne({
    filters: { id: enrollmentId, student_id: studentId }
  });
  if (!enrollment) throw Errors.generic.notFound({ entity: 'Matrícula' });

  return { data: { enrollment } };
};
