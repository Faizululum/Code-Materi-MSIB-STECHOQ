const express = require('express');

const app = express();

// Routing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});