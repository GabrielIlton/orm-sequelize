module.exports = ({ enrollmentId, status, studentId, classId }) => ([
  {
    required: true,
    value: enrollmentId,
    name: 'identificador da matrícula',
    type: 'id'
  },
  {
    required: !!status,
    value: status,
    name: 'status da matrícula',
    type: 'enrollmentStatus'
  },
  {
    required: !!studentId,
    value: studentId,
    name: 'identificador do estudante',
    type: 'id'
  },
  {
    required: !!classId,
    value: classId,
    name: 'identificador da classe',
    type: 'id'
  }
]);
