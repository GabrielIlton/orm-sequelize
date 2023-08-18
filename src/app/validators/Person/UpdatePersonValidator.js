module.exports = ({ personId, name, active, email, role }) => ([
  {
    required: true,
    value: personId,
    name: 'identificador da pessoa',
    type: 'id'
  },
  {
    required: !!name,
    value: name,
    name: 'nome',
    type: 'name'
  },
  {
    required: !!active,
    value: active,
    name: 'ativo',
    type: 'boolean'
  },
  {
    required: !!email,
    value: email,
    name: 'email',
    type: 'email'
  },
  {
    required: !!role,
    value: role,
    name: 'estudante ou professor',
    type: 'role'
  }
]);
