
var express = require('express');
var router = express.Router();

const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');
const movieRoutes = require('./movies');

router.use('/auth', authenticationRoutes);
router.use('/user', userRoutes);
router.use('/movie', movieRoutes);

module.exports = router;
