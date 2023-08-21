const { classRepository, personRepository, levelRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ classId, startDate, teacherId, levelId }) => {
  if (levelId) {
    const level = await levelRepository.findOneById({ id: levelId, fieldsToReturn: [''] });
    if (!level) throw Errors.generic.notFound({ entity: 'Nível' });
  }

  if (teacherId) {
    const teacher = await personRepository.findOne({ teacher_id: teacherId, role: 'docente', fieldsToReturn: [''] });
    if (!teacher) throw Errors.generic.notFound({ entity: 'Professor' });
  }

  const classFind = await classRepository.findOneById({ id: classId, fieldsToReturn: [''] });
  if (!classFind) throw Errors.generic.notFound({ entity: 'Classe' });

  await classRepository.updateById({ id: classId, modify: { start_date: startDate, teacher_id: teacherId, level_id: levelId } });

  return { data: { id: classId, message: 'Classe atualizada.' } };
};
