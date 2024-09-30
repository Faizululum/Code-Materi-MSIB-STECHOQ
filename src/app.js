const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Hello World! ${PORT}`);
});

const authController = require('./auth/auth.controller');

app.use('/api/auth', authController);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});