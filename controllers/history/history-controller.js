import * as dao from './history-dao.js'
import * as userDao from "../users/users-dao.js";

const findAllHistory = async (req, res) => {
    const history = await dao.findAllHistory();
    res.json(history);
}
const createHistory = async (req, res) => {
    const newHistory = req.body;
    const inserted = await dao.createHistory(newHistory);
    res.json(inserted);
}

const findHistoryById = async (req, res) => {
    const uid = req.params.uid
    const history = await dao.findHistoryById(uid)
    if (history) {
        res.json(history)
        return
    }res.sendStatus(404)
}

const deleteHistory = async (req, res) => {
    const historyToDelete = req.params.hid;
    const status = await dao.deleteHistory(historyToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/history', findAllHistory);
    app.get('/history/:uid', findHistoryById);
    app.post('/history', createHistory);
    app.delete('/history/:hid', deleteHistory);
}