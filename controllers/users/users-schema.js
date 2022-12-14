import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    nickName: String,
    role: {type: String, enum: ['ADMIN', 'NORMAL', 'OWNER']}
}, {collection: 'users'})

export default usersSchema