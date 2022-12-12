import reviewsModel from "./reviews-model.js";

export const findReviews = (gid) => reviewsModel.find({gid: gid});
export const createReview = (review) => reviewsModel.create(review);
export const deleteReview = (rid) => reviewsModel.deleteOne({_id: rid});
export const updateReview = (rid, review) => reviewsModel.updateOne({_id: rid}, {$set: review})