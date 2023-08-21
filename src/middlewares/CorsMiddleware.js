module.exports = (request, response, nextFunction) => {
  response.set('access-control-allow-origin', '*');
  response.set('access-control-allow-methods', '*');
  response.set('access-control-allow-headers', '*');
  return nextFunction();
};
