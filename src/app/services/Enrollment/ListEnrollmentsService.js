const { enrollmentRepository } = require('../../../infra/repositories');

module.exports = async ({ studentId }) => {
  const enrollments = await enrollmentRepository.find({ filters: { student_id: studentId } });

  return { data: { enrollments } };
};
