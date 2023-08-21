const { readdirSync } = require('fs');

module.exports = (app, router) => {
  app.use(router);
  readdirSync('src/app/routes').forEach(file => require(`../app/routes/${file}`)(router));
};
