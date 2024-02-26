module.exports = ({ teacherId, levelId }) => ([
  {
    required: true,
    value: teacherId,
    name: 'identificador do professor',
    type: 'id'
  },
  {
    required: true,
    value: levelId,
    name: 'identificador do nível',
    type: 'id'
  }
]);
