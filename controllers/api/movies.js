const helpers = require('../../helpers');
const apiHandlers = require('../../api');

const moviesController = module.exports;

moviesController.get = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.movies.get(req));
};

moviesController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.movies.create(req));
};