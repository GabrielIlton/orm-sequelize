const { ContentTypeMiddleware, CorsMiddleware, JSONParserMiddleware } = require('../middlewares');

module.exports = app => {
  app.use(ContentTypeMiddleware);
  app.use(CorsMiddleware);
  app.use(JSONParserMiddleware);
};
