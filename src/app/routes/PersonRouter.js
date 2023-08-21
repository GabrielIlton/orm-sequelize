const {
  ListActivePeopleService,
  RetrievePersonService,
  CancelPersonService,
  DeletePersonService,
  UpdatePersonService,
  CreatePersonService,
  ShowPersonService,
  ListPeopleService
} = require('../services/Person');

const {
  ListConfirmedEnrollmentsService,
  ListEnrollmentClassesService,
  RetrieveEnrollmentService,
  CreateEnrollmentService,
  DeleteEnrollmentService,
  UpdateEnrollmentService,
  ListEnrollmentsService,
  ShowEnrollmentService
} = require('../services/Enrollment');

const ControllerAdapter = require('../controller/ControllerAdapter');

const pathValidatorDefault = fileName => `Person/${fileName}Validator`;

module.exports = router => {
  router.post('/person',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('CreatePerson'),
      service: CreatePersonService
    })
  );

  router.get('/people/active',
    ControllerAdapter({ service: ListActivePeopleService })
  );

  router.get('/people',
    ControllerAdapter({ service: ListPeopleService })
  );

  router.get('/person/:person_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('ShowPerson'),
      service: ShowPersonService
    })
  );

  router.put('/person/retrieve/:person_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('RetrievePerson'),
      service: RetrievePersonService
    })
  );

  router.put('/person/:person_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('UpdatePerson'),
      service: UpdatePersonService
    })
  );

  router.delete('/person/:person_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('DeletePerson'),
      service: DeletePersonService
    })
  );

  router.post('/person/:student_id/enrollment',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('Enrollment/CreateEnrollment'),
      service: CreateEnrollmentService
    })
  );

  router.get('/person/:student_id/enrollments',
    ControllerAdapter({ service: ListEnrollmentsService })
  );

  router.get('/person/class/:class_id/enrollments',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('Enrollment/ListEnrollmentClasses'),
      service: ListEnrollmentClassesService
    })
  );

  router.get('/person/:student_id/enrollments/confirmed',
    ControllerAdapter({ service: ListConfirmedEnrollmentsService })
  );

  router.post('/person/cancel/:student_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('CancelPerson'),
      service: CancelPersonService
    })
  );

  router.get('/person/:student_id/enrollment/:enrollment_id',
    ControllerAdapter({ service: ShowEnrollmentService })
  );

  router.put('/person/retrieve/enrollment/:enrollment_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('RetrievePerson'),
      service: RetrieveEnrollmentService
    })
  );

  router.put('/person/:student_id/enrollment/:enrollment_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('Enrollment/UpdateEnrollment'),
      service: UpdateEnrollmentService
    })
  );

  router.delete('/person/:student_id/enrollment/:enrollment_id',
    ControllerAdapter({
      pathValidator: pathValidatorDefault('Enrollment/DeleteEnrollment'),
      service: DeleteEnrollmentService
    })
  );
};
