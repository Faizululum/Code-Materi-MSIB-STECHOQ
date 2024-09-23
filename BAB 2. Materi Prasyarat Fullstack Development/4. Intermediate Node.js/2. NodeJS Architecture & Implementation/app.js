const express = require('express');
const app = express();

// Optimasi kode V8 Engine JS

// Fungsi arrow function
const sayHello = () => {
    console.log("Hello, world!");
}

sayHello();

// Event loop
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 3100);

setTimeout(() => {
    console.log("Timeout 2");
}, 3000);

console.log("End");

// Callback
const callback = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

callback(null, "Hello, world!");

// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, world!");
    }, 3000);
});

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// Thread pool

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } 
    console.log(data);
});

console.log("Program berjalan tanpa terblokir");