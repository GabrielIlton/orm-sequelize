const { PeopleModel, LevelsModel, ClassesModel, EnrollmentsModel, UsersModel, WebSocketsModel } = require('../models/ConnectModels')();

const ClassRepository = require('./ClassRepository');
const EnrollmentRepository = require('./EnrollmentRepository');
const LevelRepository = require('./LevelRepository');
const UserRepository = require('./UserRepository');
const PersonRepository = require('./PersonRepository');
const WebSocketRepository = require('./WebSocketRepository');

module.exports = {
  classRepository: new ClassRepository({ ClassesModel }),
  enrollmentRepository: new EnrollmentRepository({ EnrollmentsModel }),
  levelRepository: new LevelRepository({ LevelsModel }),
  userRepository: new UserRepository({ UsersModel }),
  personRepository: new PersonRepository({ PeopleModel }),
  webSocketRepository: new WebSocketRepository({ WebSocketsModel })
};
