module.exports = ({ enrollmentId }) => ([
  {
    required: true,
    value: enrollmentId,
    name: 'identificador da matrícula',
    type: 'id'
  }
]);
