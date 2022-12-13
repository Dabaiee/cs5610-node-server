import mongoose from 'mongoose';
const schema = mongoose.Schema({
    gid: String,
    uid: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    userName: String,
    time: Date,
    content: String,
    liked: Boolean,
    likes: Number,
    stars: Number,

}, {collection: 'reviews'});
export default schema;