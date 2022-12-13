import mongoose from "mongoose";
import groupSchema from "./group-schema.js";

const groupModel = mongoose.model('GroupModel', groupSchema)

export default groupModel