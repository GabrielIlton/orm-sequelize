const {
  ListFullClassesService,
  RetrieveClassService,
  ListClassesService,
  UpdateClassService,
  DeleteClassService,
  CreateClassService
} = require('../services/Class');

const ControllerAdapter = require('../controller/ControllerAdapter');

const pathValidatorDefault = fileName => `Class/${fileName}Validator`;

module.exports = router => {
  router.post('/class', ControllerAdapter({ pathValidator: pathValidatorDefault('CreateClass'), service: CreateClassService }));

  router.get('/classes', ControllerAdapter({ pathValidator: pathValidatorDefault('ListClasses'), service: ListClassesService }));

  router.get('/classes/full', ControllerAdapter({ service: ListFullClassesService }));

  router.put('/class/retrieve/:class_id', ControllerAdapter({ pathValidator: pathValidatorDefault('RetrieveClass'), service: RetrieveClassService }));

  router.put('/class/:class_id', ControllerAdapter({ pathValidator: pathValidatorDefault('UpdateClass'), service: UpdateClassService }));

  router.delete('/class/:class_id', ControllerAdapter({ pathValidator: pathValidatorDefault('DeleteClass'), service: DeleteClassService }));
};
