import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    time: Date,
    content: String,
    liked: Boolean,
    likes: Number,
    stars: Number,

}, {collection: 'reviews'});
export default schema;