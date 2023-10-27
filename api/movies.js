const database = require('../database');
const {collections} = require('../database');
const utilities = require('../utilities');

const movieApi = module.exports;

movieApi.get = async (request) => {
    const { userId } = request.user;

    const limit = parseInt(request.query.limit) || 5;
    const page = parseInt(request.query.page) || 0;
    const offset = page*limit;
    const key = { uid: userId }

    const [movies, count] = await Promise.all([
        database.client.collection(collections.MOVIES).find(key).skip(offset).limit(limit).toArray(),
        database.client.collection(collections.MOVIES).countDocuments(key)
    ]);

    return utilities.paginate(`/api/movie${request.url}`, movies, count, limit, page);
}

movieApi.create = async (request) => {
    const {user} = request;
    const {releaseYear, title, genre, rating, director} = request.body;

    const timestamp = utilities.getISOTimestamp();
    const movie = {};

    movie.uid = user.userId;
    movie.title = title;
    movie.genre = genre;
    movie.rating = rating;
    movie.director = director;
    movie.releaseYear = releaseYear;
    movie.createdAt = timestamp;
    movie.updatedAt = timestamp;

    return await database.client.collection(collections.MOVIES).insertOne(movie);
}