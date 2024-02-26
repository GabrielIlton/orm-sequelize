module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: {
      type: DataTypes.STRING,
      validate: {
        validate: field => {
          if (field.legth < 2) throw new Error('O campo nome deve ter no mínimo dois caracteres.');
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email inválido.'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    paranoid: true,
    defaultScope: { where: { active: true } },
    scopes: { all: { where: { } } }
  });

  People.associate = function ({ Classes, Enrollments }) {
    People.hasMany(Classes, { foreignKey: 'teacher_id' });
    People.hasMany(Enrollments, {
      foreignKey: 'student_id',
      scope: { status: 'confirmado' },
      as: 'classEnrollments'
    });
  };

  return People;
};
