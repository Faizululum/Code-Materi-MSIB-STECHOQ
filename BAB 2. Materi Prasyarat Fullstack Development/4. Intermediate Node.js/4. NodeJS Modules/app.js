const express = require("express");
const http = require("http");
const app = express();

// Membuat server HTTP sederhana
// const server = http.createServer((req, res) => {
// Menangani permintaan dari client
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, world!');
// });

// Express js
// Rute Beranda
// Mendengarkan pada port tertentu
const port = 3000;

app.get("/", (req, res) => {
  res.send("Selamat datang di halaman beranda");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

//
