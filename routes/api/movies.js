const express = require('express');
const router = express.Router();

const {setupApiRoute} = require('../../helpers');
const controllers = require('../../controllers');
const middlewares = require('../../middlewares');

setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.movies.get);
setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser, middlewares.checkRequired.bind(null, ['releaseYear', 'title', 'genre', 'rating', 'director'])], controllers.api.movies.create);

module.exports = router;