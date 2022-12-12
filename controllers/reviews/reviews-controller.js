import * as reviewsDao from './reviews-dao.js'

const findReviews = async (req, res) => {
    const reviews = await reviewsDao.findReviews();
    res.json(reviews);
}

const createReview = async (req, res) => {
    const newReview = req.body;
    const insertedReview = await reviewsDao.createReview(newReview);
    res.json(insertedReview);
}

export default (app) => {
    app.get('/api/reviews/:gid', findReviews);
    app.post('/api/reviews', createReview);
}