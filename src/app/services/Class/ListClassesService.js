const MakeFilterByDateHelper = require('../../../infra/helpers/MakeFilterByDateHelper');
const { classRepository } = require('../../../infra/repositories');

module.exports = async ({ startDate, endDate }) => {
  const filterByDate = startDate && endDate ? MakeFilterByDateHelper({ fieldToFilter: 'start_date', endDate, startDate }) : null;

  const classes = await classRepository.find({ filters: filterByDate });

  return { data: { classes } };
};
