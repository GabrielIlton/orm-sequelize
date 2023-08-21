const { enrollmentRepository } = require('../../../infra/repositories');
const { CLASS_LIMIT } = require('../../../config/Environments');

module.exports = async () => {
  const enrollments = await enrollmentRepository.findAllFullClass({
    filters: { status: 'confirmado' },
    fieldsToReturn: ['class_id'],
    classLimit: CLASS_LIMIT
  });

  return { data: { full_classes: enrollments.count } };
};
