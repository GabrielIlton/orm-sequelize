module.exports = (request, response, nextFunction) => {
  response.type('json');
  return nextFunction();
};
