const { classRepository, personRepository, enrollmentRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');
const { CLASS_LIMIT } = require('../../../config/Environments');

module.exports = async ({ status, studentId, classId }) => {
  const [enrollmentAlreadyExists, enrrolmentsOnClass, student, classFind] = await Promise.all([
    enrollmentRepository.findOne({ filters: { status, student_id: studentId, class_id: classId }, fieldsToReturn: [''] }),
    enrollmentRepository.findAllAndCount({ filters: { class_id: classId, status: 'confirmado' }, limit: Number(CLASS_LIMIT) }),
    personRepository.findOne({ filters: { id: studentId, role: 'estudante' }, fieldsToReturn: [''] }),
    classRepository.findOneById({ id: classId, fieldsToReturn: [''] })
  ]);

  if (!student) throw Errors.generic.notFound({ entity: 'Estudante' });
  if (!classFind) throw Errors.generic.notFound({ field: 'Classe' });
  if (enrollmentAlreadyExists) throw Errors.studentAlreadyRegistered();
  if (enrrolmentsOnClass.count >= Number(CLASS_LIMIT)) throw Errors.studentAlreadyRegistered();

  const newEnrollment = await enrollmentRepository.create({ status, student_id: studentId, class_id: classId });

  return { data: { class: { id: newEnrollment.id, status, student_id: studentId, class_id: classId } }, statusCode: 201 };
};
