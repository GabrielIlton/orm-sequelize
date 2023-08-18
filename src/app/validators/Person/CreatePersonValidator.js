module.exports = ({ name, active, email, role }) => ([
  {
    required: true,
    value: name,
    name: 'nome',
    type: 'name'
  },
  {
    required: true,
    value: active,
    name: 'ativo',
    type: 'boolean'
  },
  {
    required: true,
    value: email,
    name: 'email',
    type: 'email'
  },
  {
    required: true,
    value: role,
    name: 'estudante ou professor',
    type: 'role'
  }
]);
