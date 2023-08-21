const { classRepository, personRepository, enrollmentRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ enrollmentId, status, studentId, classId }) => {
  const enrollmentExists = await enrollmentRepository.findOne({ filters: { id: enrollmentId, student_id: studentId }, fieldsToReturn: [''] });
  if (!enrollmentExists) throw Errors.generic.notFound({ entity: 'Matrícula' });

  if (studentId) {
    const student = await personRepository.findOne({ filters: { id: studentId, role: 'estudante' }, fieldsToReturn: [''] });
    if (!student) throw Errors.generic.notFound({ entity: 'Estudante' });
  }

  if (classId) {
    const classFind = await classRepository.findOneById({ id: classId, fieldsToReturn: [''] });
    if (!classFind) throw Errors.generic.notFound({ entity: 'Classe' });
  }

  await enrollmentRepository.updateById({ id: enrollmentId, modify: { status, student_id: studentId, class_id: classId } });

  return { data: { enrollment: { id: enrollmentId, message: 'Matrícula atualizada.' } } };
};
