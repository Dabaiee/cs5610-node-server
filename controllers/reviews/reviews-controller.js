import * as reviewsDao from './reviews-dao.js'

const findReviews = async (req, res) => {
    const reviewsFindById = req.params.gid;
    const reviews = await reviewsDao.findReviews(reviewsFindById);
    res.json(reviews);
}
const findRecentReviews = async (req, res) => {
    const reviews = await reviewsDao.findRecentReviews();
    res.json(reviews);
}

const createReview = async (req, res) => {
    const newReview = req.body;
    const insertedReview = await reviewsDao.createReview(newReview);
    res.json(insertedReview);
}

const deleteReview = async (req, res) => {
    const reviewIdToDelete = req.params.rid;
    const status = await reviewsDao.deleteReview(reviewIdToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/api/reviews', findRecentReviews);
    app.get('/api/reviews/:gid', findReviews);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:rid', deleteReview);
}