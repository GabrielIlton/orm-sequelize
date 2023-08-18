module.exports = ({ status, studentId, classId }) => ([
  {
    required: true,
    value: status,
    name: 'status da matrícula',
    type: 'enrollmentStatus'
  },
  {
    required: true,
    value: studentId,
    name: 'identificador do estudante',
    type: 'id'
  },
  {
    required: true,
    value: classId,
    name: 'identificador da classe',
    type: 'id'
  }
]);
