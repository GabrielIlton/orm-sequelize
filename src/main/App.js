const express = require('express');
const Middlewares = require('./Middlewares');
const Router = express.Router();
const Routes = require('./Routes');

const App = express();

Middlewares(App);
Routes(App, Router);

module.exports = App;
