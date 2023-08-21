const { Op } = require('sequelize');

module.exports = ({ fieldToFilter, startDate, endDate }) => ({ [fieldToFilter]: { [Op.gte]: startDate, [Op.lte]: endDate } });
