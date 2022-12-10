import express from 'express';
const app = express();

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000);