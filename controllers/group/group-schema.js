import mongoose from "mongoose";

const groupSchema = mongoose.Schema({
    joined: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'groups'})

export default groupSchema