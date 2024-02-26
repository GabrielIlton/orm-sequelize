const { ContentTypeMiddleware, CorsMiddleware, JSONParserMiddleware, ViewMiddleware } = require('../middlewares');

module.exports = (app, Static) => {
  app.use('/view', ViewMiddleware(Static));
  app.use(ContentTypeMiddleware);
  app.use(CorsMiddleware);
  app.use(JSONParserMiddleware);
};
