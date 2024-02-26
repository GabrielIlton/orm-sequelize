const { personRepository, enrollmentRepository } = require('../../../infra/repositories');
const { Errors } = require('../../utils/HTTP');

module.exports = async ({ studentId }) => {
  const student = await personRepository.findOneById({ id: studentId, fieldsToReturn: [''] });
  if (!student) throw Errors.generic.notFound({ entity: 'Estudante' });

  const { sequelize } = global.env;

  sequelize.transaction(async transaction => {
    await personRepository.updateByIdWithTransaction({ id: studentId, modify: { active: false }, transaction });
    await enrollmentRepository.updateWithTransaction({ filters: { student_id: studentId }, modify: { status: 'cancelado' }, transaction });
  });

  return { data: { id: studentId, message: 'Estudante cancelado.' } };
};
