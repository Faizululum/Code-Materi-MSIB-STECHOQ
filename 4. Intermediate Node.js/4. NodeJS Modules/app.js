const express = require('express');
const http = require('http');
const app = express();

// Membuat server HTTP sederhana
const server = http.createServer((req, res) => {
    // Menangani permintaan dari client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

// Mendengarkan pada port tertentu
const port = 3000;
server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
