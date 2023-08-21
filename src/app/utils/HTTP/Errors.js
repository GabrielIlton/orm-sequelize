const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('./HttpCodes');

const errorFunction = (errorStatus, errorMessage) => ({ errorStatus, errorMessage });

module.exports = ({
  generic: {
    invalidType: ({ fieldKey, correctType }) => errorFunction(
      UNPROCESSABLE_ENTITY, `O campo ${fieldKey} deve ser do tipo ${correctType}.`
    ),
    notPossibleValidate: ({ field }) => errorFunction(
      UNPROCESSABLE_ENTITY, `Não foi possível validar o campo ${field}.`
    ),
    alreadyExists: ({ field }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${field[0].toUpperCase() + field.substr(1)} já cadastrado(a) em nosso sistema.`
    ),
    notExists: ({ fieldKey }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${fieldKey[0].toUpperCase() + fieldKey.substr(1)} não existe.`
    ),
    acceptOnly: ({ fieldKey, correctType }) => errorFunction(
      UNPROCESSABLE_ENTITY, `O campo ${fieldKey} aceita apenas ${correctType} em seus caracteres.`
    ),
    missingParamError: ({ fieldKey }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${fieldKey[0].toUpperCase() + fieldKey.substr(1)} é obrigatório(a).`
    ),
    notFound: ({ entity }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${entity[0].toUpperCase() + entity.substr(1)} não encontrado(a).`
    ),
    invalidField: ({ fieldKey }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${fieldKey[0].toUpperCase() + fieldKey.substr(1)} inválido(a).`
    ),
    notExistsOnArray: ({ fieldKey }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${fieldKey[0].toUpperCase() + fieldKey.substr(1)} não está disponível para ser utilizado.`
    ),
    notAvailableType: ({ fieldKey }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${fieldKey[0].toUpperCase() + fieldKey.substr(1)} não está no tipo adequado para ser utilizado.`
    ),
    invalidLength: ({ fieldKey, valueLength }) => errorFunction(
      UNPROCESSABLE_ENTITY, `O campo ${fieldKey} deve conter ${valueLength} caracteres.`
    ),
    invalidValue: ({ fieldKey, value, isMax = false }) => errorFunction(
      UNPROCESSABLE_ENTITY, `O campo ${fieldKey} deve possuir um valor ${isMax ? 'máximo' : 'mínimo'} de ${value}.`
    ),
    deletedError: ({ item }) => errorFunction(
      BAD_REQUEST, `Erro ao deletar ${item}.`
    ),
    createdError: ({ item }) => errorFunction(
      BAD_REQUEST, `Erro ao criar ${item}.`
    ),
    updatedError: ({ item }) => errorFunction(
      BAD_REQUEST, `Erro ao atualizar ${item}.`
    ),
    registerError: ({ item }) => errorFunction(
      BAD_REQUEST, `Erro ao cadastrar ${item}.`
    ),
    notDeleted: ({ fieldKey }) => errorFunction(
      UNPROCESSABLE_ENTITY, `${fieldKey[0].toUpperCase() + fieldKey.substr(1)} não está deletado(a).`
    )
  },
  dateGreaterThanToday: () => errorFunction(
    UNPROCESSABLE_ENTITY, 'Escolha uma data maior que o dia de hoje.'
  ),
  studentAlreadyRegistered: () => errorFunction(
    UNPROCESSABLE_ENTITY, 'Estudante já matriculado nessa classe.'
  ),
  fullClass: () => errorFunction(
    UNPROCESSABLE_ENTITY, 'Classe cheia.'
  )
});
