import historyModel from "./history-model.js";

export const findAllHistory = async () =>
    await historyModel.find()

export const createHistory = (history) =>
    historyModel.create(history)

export const findHistoryById = async (uid) =>
    await historyModel.find({uid}).sort({Viewed: -1})

export const deleteHistory = (hid) =>
    historyModel.deleteOne({_id: hid});
