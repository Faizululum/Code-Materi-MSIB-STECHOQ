// const express = require("express");

// const app = express();

// // app.use(ekspress.json());

// app.get("/", (req, res) => {
//     res.send("Halo, ini adalah file eksternal javascript");
// });

document.getElementsByTagName("title")[0].innerHTML = "Algoritma dan struktur data";

let angka = [1, 2, 3, 4, 5];
let kata = ["halo", "apa", "kabar", "ini", "saya"];

console.log(angka[3]);
console.log(kata[4]);

angka.push(9);
console.log(angka);

let lastAngka = angka.pop();
console.log(lastAngka);

let fruits = ["apple", "banana", "orange", "mango"];
let firstFruit = fruits.shift();

console.log(fruits);
console.log(firstFruit);

let colors = ["red", "blue", "green", "yellow"];
console.log(colors);

colors.splice(1, 2);
console.log(colors);