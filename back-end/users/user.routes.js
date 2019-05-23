const route = require('express').Router();
const asyncMiddleware = require('../utils/asyncMiddleware');
const UserService = require('./user.service');

route.post('/register', asyncMiddleware(async function(req, res) {
  await UserService.register(req, res);
}));

route.post('/signin', asyncMiddleware(async function(req, res) {
  await UserService.signin(req.body)
    .then(user => user ? res.json(user) : res.status(400).message('username or password is incorrect'))
    .then(token => token ? res.json(token) : res.status(400).message('username or password is incorrect'))
}));

module.exports = route;
