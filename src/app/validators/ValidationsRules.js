module.exports = {
  name: {
    availableTypes: ['string'],
    minLength: 2,
    maxLength: 255
  },
  id: {
    availableTypes: ['string', 'number'],
    containOnlyNumbers: true
  },
  limit: {
    availableTypes: ['string', 'number'],
    containOnlyNumbers: true,
    minValue: 1,
    maxValue: 100
  },
  email: {
    availableTypes: ['string'],
    isEmail: true
  },
  boolean: {
    availableTypes: ['boolean', 'string'],
    oneOf: ['false', 'true', false, true, '']
  },
  string: {
    availableTypes: ['string']
  },
  role: {
    availableTypes: ['string'],
    oneOf: ['estudante', 'professor']
  },
  enrollmentStatus: {
    availableTypes: ['string'],
    oneOf: ['confirmado', 'cancelado']
  },
  description: {
    availableTypes: ['string'],
    oneOf: ['basico', 'intermediario', 'avancado']
  },
  isDate: {
    availableTypes: ['string'],
    isDate: true
  }
};
