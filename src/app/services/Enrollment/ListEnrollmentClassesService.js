const { enrollmentRepository } = require('../../../infra/repositories');

module.exports = async ({ classId, limit }) => {
  const enrollments = await enrollmentRepository.findAllAndCount({ filters: { class_id: classId, status: 'confirmado' }, limit: limit || 10 });

  return { data: { count: enrollments.count, enrollments: enrollments.rows } };
};
