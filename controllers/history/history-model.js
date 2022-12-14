import mongoose from "mongoose";
import historySchema from "./history-schema.js";

const historyModel = mongoose.model('HistoryModel', historySchema)

export default historyModel