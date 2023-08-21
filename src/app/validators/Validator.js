const DateHelper = require('../helpers/DateHelper');
const { Errors } = require('../utils/HTTP');

module.exports = {
  required ({ fieldKey, fieldValue }) {
    if (!fieldValue && fieldValue !== 0) return Errors.generic.missingParamError({ fieldKey });
    return false;
  },

  length ({ fieldKey, fieldValue, valueLength }) {
    if (!fieldValue || fieldValue.length !== valueLength) return Errors.generic.invalidLength({ fieldKey, valueLength });
    return false;
  },

  maxLength ({ fieldKey, fieldValue, max }) {
    if (!fieldValue) return false;
    if (fieldValue.length > max) return Errors.generic.invalidLength({ fieldKey, valueLength: max });
  },

  minLength ({ fieldKey, fieldValue, min }) {
    if (!fieldValue) return false;
    if (fieldValue.length < min) return Errors.generic.invalidLength({ fieldKey, valueLength: min });
  },

  minValue ({ fieldValue, min, fieldKey }) {
    if (!fieldValue) return false;
    if (Number(fieldValue) < min) return Errors.generic.invalidValue({ fieldKey, value: min });
  },

  maxValue ({ fieldValue, max, fieldKey }) {
    if (!fieldValue) return false;
    if (Number(fieldValue) > max) return Errors.generic.invalidValue({ fieldKey, isMax: true, value: max });
  },

  isEmail ({ fieldKey, fieldValue }) {
    if (!fieldValue) return false;

    const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!fieldValue.match(emailFormat)) return Errors.generic.invalidField({ fieldKey });
  },

  isDate ({ fieldKey, fieldValue }) {
    const dateIsValid = dateHelper.isValid(fieldValue);

    if (!dateIsValid) return Errors.generic.invalidField({ fieldKey });
  },

  availableTypes ({ fieldKey, fieldValue, listOfAvailableTypes = [] }) {
    if (!fieldValue) return false;
    const isCorrect = listOfAvailableTypes.find(availableType => availableType === typeof fieldValue);
    if (!isCorrect) return Errors.generic.notAvailableType({ fieldKey });
  },

  oneOf ({ fieldKey, fieldValue, arrayToCompare = [] }) {
    if (!fieldValue) return false;
    const elementFounded = arrayToCompare.includes(fieldValue);
    if (!elementFounded) return Errors.generic.notExistsOnArray({ fieldKey });
  },

  containOnlyLetters ({ fieldKey, fieldValue }) {
    const isOnlyLetters = (fieldValue) => /[^a-zA-Z]/.test(fieldValue);
    if (!isOnlyLetters(fieldValue)) return Errors.generic.acceptOnly({ fieldKey, correctType: 'letras' });
  },

  containOnlyNumbers ({ fieldKey, fieldValue }) {
    const isOnlyNumbers = (fieldValue) => /^\d+$/.test(fieldValue);
    if (!isOnlyNumbers(fieldValue)) return Errors.generic.acceptOnly({ fieldKey, correctType: 'dígitos' });
  }
};
