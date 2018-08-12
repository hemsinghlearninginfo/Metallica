const Router = require('express').Router();
const controller = require('./controller');

Router.route('/')
  .post(controller.saveUserRole);

Router.route('/:id')
  .get(controller.getUserRole);

module.exports = Router;