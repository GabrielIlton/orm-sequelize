const express = require('express');
const { static: Static } = express;
const Router = express.Router();

const Middlewares = require('./Middlewares');
const WebSocket = require('./WebSocket');
const Routes = require('./Routes');

const App = express();

Middlewares(App, Static);
Routes(App, Router);
// WebSocket(App);

module.exports = App;
