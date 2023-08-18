module.exports = ({ classId, limit }) => ([
  {
    required: true,
    value: classId,
    name: 'identificador da classe',
    type: 'id'
  },
  {
    required: !!limit,
    value: limit,
    name: 'limite',
    type: 'limit'
  }
]);
