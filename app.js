import express from 'express';
import cors from 'cors';

import session from 'express-session'
import SessionController from "./session-controller.js";
import GamesController from "./controllers/games/games-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
import GroupController from "./controllers/group/group-controller.js";
import HistoryController from "./controllers/history/history-controller.js";
// const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'
const CONNECTION_STRING =    'mongodb+srv://admin:123045@cluster0.tme0phk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING, (err) => {
    // if (err) throw err;
    console.log("MongoDB connected!")
});

const app = express();
var allowedOrigins = ['http://localhost:3000',
    'https://strong-sherbet-26589e.netlify.app/'];

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }))
app.use(cors({
    credentials: true,
    origin: function(origin, callback){
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
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
GroupController(app)
HistoryController(app)
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.listen(process.env.PORT || 4000);