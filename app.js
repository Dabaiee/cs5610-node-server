import express from 'express';
import cors from 'cors';

import GamesController from "./controllers/games/games-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'
// const CONNECTION_STRING =    'mongodb+srv://admin:123045@cluster0.tme0phk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING, (err) => {
    if (err) throw err;
    console.log("MongoDB connected!")
});

const app = express();
app.use(cors())
app.use(express.json())
GamesController(app);
ReviewsController(app);

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.listen(process.env.PORT || 4000);