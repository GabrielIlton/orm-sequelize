module.exports = ({ classId, startDate, teacherId, levelId }) => ([
  {
    required: true,
    value: classId,
    name: 'identificador da classe',
    type: 'id'
  },
  {
    required: !!startDate,
    value: startDate,
    name: 'data de início',
    type: 'isDate'
  },
  {
    required: !!teacherId,
    value: teacherId,
    name: 'identificador do professor',
    type: 'id'
  },
  {
    required: !!levelId,
    value: levelId,
    name: 'identificador do nível',
    type: 'id'
  }
]);
