import express from 'express';
import cors from 'cors';

import session from 'express-session'
import SessionController from "./session-controller.js";
import GamesController from "./controllers/games/games-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'
// const CONNECTION_STRING =    'mongodb+srv://admin:123045@cluster0.tme0phk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING, (err) => {
    // if (err) throw err;
    console.log("MongoDB connected!")
});

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
GamesController(app)
ReviewsController(app)
UsersController(app)
SessionController(app)
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.listen(process.env.PORT || 4000);