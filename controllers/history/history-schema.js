import mongoose from 'mongoose';
const schema = mongoose.Schema({
    gid: String,
    uid: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    Title: String,
    Year: String,
    Poster: String,
    Viewed: Date
}, {collection: 'history'});
export default schema;