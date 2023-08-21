const { PeopleModel, LevelsModel, ClassesModel, EnrollmentsModel } = require('../models/ConnectModels');

const ClassRepository = require('./ClassRepository');
const EnrollmentRepository = require('./EnrollmentRepository');
const LevelRepository = require('./LevelRepository');
const PersonRepository = require('./PersonRepository');

module.exports = {
  classRepository: new ClassRepository({ ClassesModel }),
  enrollmentRepository: new EnrollmentRepository({ EnrollmentsModel }),
  levelRepository: new LevelRepository({ LevelsModel }),
  personRepository: new PersonRepository({ PeopleModel })
};
