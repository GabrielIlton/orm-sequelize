const { personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ studentId }) => {
  const student = await personRepository.findOneById({ id: studentId });
  if (!student) throw Errors.generic.notFound({ entity: 'Estudante' });

  const enrollments = await student.getClassEnrollments();

  return { data: { enrollments } };
};
