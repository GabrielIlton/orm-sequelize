module.exports = ({ startDate, endDate }) => ([
  {
    required: !!startDate,
    value: endDate,
    name: 'data final',
    type: 'isDate'
  },
  {
    required: !!endDate,
    value: startDate,
    name: 'data de início',
    type: 'isDate'
  }
]);
