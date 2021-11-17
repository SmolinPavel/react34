const express = require('express');
const dotenv = require('dotenv');
const { json } = require('body-parser');
const cors = require('cors');

const { generateAccessToken } = require('./utils');
const { authenticateToken } = require('./middlewares');

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Ping!');
});

app.post('/get-token', (req, res) => {
  const token = generateAccessToken({ username: req.body.username });
  res.json(token);
});

app.get('/private', authenticateToken, (req, res) => {
  res.json(`This is a very secret message! ${req.user.username} rocks!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
