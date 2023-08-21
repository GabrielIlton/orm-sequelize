const { ListLevelsService, DeleteLevelService, CreateLevelService, RetrieveLevelService } = require('../services/Level');
const ControllerAdapter = require('../controller/ControllerAdapter');

const pathValidatorDefault = fileName => `Level/${fileName}Validator`;

module.exports = router => {
  router.post('/level', ControllerAdapter({ pathValidator: pathValidatorDefault('CreateLevel'), service: CreateLevelService }));

  router.get('/levels', ControllerAdapter({ service: ListLevelsService }));

  router.put('/level/retrieve/:level_id', ControllerAdapter({ pathValidator: pathValidatorDefault('RetrieveLevel'), service: RetrieveLevelService }));

  router.delete('/level/:level_id', ControllerAdapter({ pathValidator: pathValidatorDefault('DeleteLevel'), service: DeleteLevelService }));
};
