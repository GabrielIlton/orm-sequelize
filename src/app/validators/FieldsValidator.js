const rulesByType = require('./ValidationsRules');
const Errors = require('../helpers/HTTP/Errors');
const Validator = require('./Validator');

module.exports = ({ fieldsAndRules = [] }) => {
  for (const fieldToValidate of fieldsAndRules) {
    if (fieldToValidate.required) {
      const errorsFounded = handleValidations(fieldToValidate);
      if (errorsFounded) return errorsFounded;
    }
  }
};

const makeObjectToSendOnValidator = {
  availableTypes: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, listOfAvailableTypes: rulesToFollow.availableTypes }),

  length: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, valueLength: rulesToFollow.length }),

  oneOf: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, arrayToCompare: rulesToFollow.oneOf }),

  minLength: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, min: rulesToFollow.minLength }),

  maxLength: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, max: rulesToFollow.maxLength }),

  minValue: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, min: rulesToFollow.minValue }),

  maxValue: ({ rulesToFollow, field }) => ({ fieldKey: field.name, fieldValue: field.value, max: rulesToFollow.maxValue }),

  containOnlyLetters: ({ field }) => ({ fieldKey: field.name, fieldValue: field.value }),

  containOnlyNumbers: ({ field }) => ({ fieldKey: field.name, fieldValue: field.value }),

  required: ({ field }) => ({ fieldKey: field.name, fieldValue: field.value }),

  isEmail: ({ field }) => ({ fieldKey: field.name, fieldValue: field.value }),

  isDate: ({ field }) => ({ fieldKey: field.name, fieldValue: field.value })
};

const handleValidations = field => {
  const error = Validator.required(makeObjectToSendOnValidator.required({ field }));
  if (error) return error;

  const rulesToFollow = rulesByType[field.type];
  if (!rulesToFollow) return Errors.generic.notPossibleValidate({ field: field.name });

  for (const ruleToFollow in rulesToFollow) {
    const objectToSendOnValidator = makeObjectToSendOnValidator[ruleToFollow]({ rulesToFollow, field });
    const error = !objectToSendOnValidator ? null : Validator[ruleToFollow](objectToSendOnValidator);

    if (error) return error;
  }
};
