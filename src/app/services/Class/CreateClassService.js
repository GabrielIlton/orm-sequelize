const { classRepository, levelRepository, personRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ startDate, teacherId, levelId }) => {
  if (startDate <= new Date()) throw Errors.dateGreaterThanToday();

  const teacher = await personRepository.findOne({ filters: { id: teacherId, role: 'docente' }, fieldsToReturn: [''] });
  if (!teacher) throw Errors.generic.notFound({ entity: 'Professor' });

  const level = await levelRepository.findOneById({ id: levelId, fieldsToReturn: [''] });
  if (!level) throw Errors.generic.notFound({ entity: 'Nível' });

  const classFind = await classRepository.findOne({ filters: { teacher_id: teacherId, level_id: levelId }, fieldsToReturn: [''] });
  if (classFind) throw Errors.generic.alreadyExists({ field: 'Classe' });

  const newClass = await classRepository.create({ start_date: startDate, teacher_id: teacherId, level_id: levelId });

  return { data: { class: { id: newClass.id, start_date: startDate, teacher_id: teacherId, level_id: levelId } }, statusCode: 201 };
};
