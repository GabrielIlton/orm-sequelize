const FormatterSnakeToCamelCaseHelper = require('../helpers/FormatterSnakeToCamelCaseHelper');
const { HttpResponseError, HttpResponseSuccess } = require('../utils/HTTP');
const FieldsValidator = require('../validators/FieldsValidator');

module.exports = ({ pathValidator, service }) => {
  return async (request, response) => {
    try {
      const { body, query, params } = request;

      const requestFormatted = FormatterSnakeToCamelCaseHelper({ ...body, ...query, ...params });

      if (pathValidator) {
        const error = FieldsValidator({ fieldsAndRules: require(`../validators/${pathValidator}`)(requestFormatted) });
        if (error) return HttpResponseError({ response, error });
      }

      const { data, statusCode, notReturn } = await service({ ...requestFormatted });

      return HttpResponseSuccess({ response, statusCode, notReturn, data });
    } catch (error) {
      return HttpResponseError({ response, error });
    }
  };
};
