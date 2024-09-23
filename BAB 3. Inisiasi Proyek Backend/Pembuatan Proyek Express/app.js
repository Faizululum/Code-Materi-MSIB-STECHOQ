import express from 'express';
const app = express();
app.use(express.json());

// Middleware logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware atentikasi
app.use((req, res, next) => {
    if (req.headers.authorization) {
        // Melakukan autentikasi
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});