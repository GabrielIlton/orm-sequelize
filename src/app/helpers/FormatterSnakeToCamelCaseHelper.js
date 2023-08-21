const snakeToCamelRegex = /_([a-z])/g;

module.exports = snakeCaseObject => {
  const camelCaseObject = {};

  for (const key in snakeCaseObject) {
    if (Object.hasOwnProperty.call(snakeCaseObject, key)) {
      const camelCaseKey = key.replace(snakeToCamelRegex, (_, letter) => letter.toUpperCase());
      camelCaseObject[camelCaseKey] = snakeCaseObject[key];
    }
  }

  return camelCaseObject;
};
