// const express = require("express");

// const app = express();

// // app.use(ekspress.json());

// app.get("/", (req, res) => {
//     res.send("Halo, ini adalah file eksternal javascript");
// });

document.getElementsByTagName("title")[0].innerHTML = "Algoritma dan struktur data";

// let angka = [1, 2, 3, 4, 5];
// let kata = ["halo", "apa", "kabar", "ini", "saya"];

// console.log(angka[3]);
// console.log(kata[4]);

// angka.push(9);
// console.log(angka);

// let lastAngka = angka.pop();
// console.log(lastAngka);

// let fruits = ["apple", "banana", "orange", "mango"];
// let firstFruit = fruits.shift();

// console.log(fruits);
// console.log(firstFruit);

// let colors = ["red", "blue", "green", "yellow"];
// console.log(colors);

// colors.splice(1, 2);
// console.log(colors);

let fruits = ["apple", "banana", "orange", "mango"];
let updateFruits = fruits.map(function(fruits) {
    if(fruits === 'banana') {
        return 'mango';
    }
    return fruits;
});

console.log(updateFruits);

let person1 = {
    name: "Faizul",
    DOB: 2003,
    age: function() {
        return 2024 - this.DOB;
    },
    email: "faizul@gmail.com",
    address: {
        street: "Jl. Kebon",
        city: "Jakarta",
        postalCode: "12345"
    },
    phoneNumber: "08123456789",
    hobbies: ["playing game", "reading book", "watching movie"],
    greet: function() {
        return "Halo, saya adalah " + this.name;
    }
};

console.log(person1.name);
console.log(person1.DOB);
console.log(person1.age());
console.log(person1.email);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.postalCode);
console.log(person1.phoneNumber);
console.log(person1.hobbies);
console.log(person1.greet());

// Stack LIFO (last in first out)

function functionA() {
    console.log("Halo, ini adalah fungsi A");
    functionB();
}

function functionB() {
    console.log("Halo, ini adalah fungsi B");
    functionC();
}

function functionC() {
    console.log("Halo, ini adalah fungsi C");
}
functionA();

// Queue FIFO (first in first out)

// const async = require("async");

// const queue = async.queue((task, callback) => {
//     console.log("Halo, ini adalah task " + task);
//     callback();
// }, 2);

// queue.push("task 1");
// queue.push("task 2");
// queue.push("task 3");

// queue.drain(() => {
//     console.log("Queue is empty");
// }); 

// Algoritma Sorting
// Bubble Sort

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let numbers = [5, 2, 8, 3, 9, 1];
console.log("sebelum sorting", (numbers));

let sortedNumbers = bubbleSort(numbers);
console.log("setelah sorting", (sortedNumbers));

// Selection Sort

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

let numbers2 = [5, 2, 8, 3, 9, 1];
console.log("sebelum sorting", (numbers2));
let sortedNumbers2 = selectionSort(numbers2);
console.log("setelah sorting", (sortedNumbers2));

// Insertion Sort

function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

let numbers3 = [5, 2, 8, 3, 9, 1];
console.log("sebelum sorting", numbers3);
let sortedNumbers3 = insertionSort(numbers3, numbers3.length);
console.log("setelah sorting", sortedNumbers3);

// Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

let numbers4 = [5, 2, 8, 3, 9, 1];
console.log("sebelum sorting", numbers4);
let sortedNumbers4 = mergeSort(numbers4);
console.log("setelah sorting", sortedNumbers4);

// Quick Sort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let numbers5 = [5, 2, 8, 3, 9, 1];
console.log("sebelum sorting", numbers5);
let sortedNumbers5 = quickSort(numbers5);
console.log("setelah sorting", sortedNumbers5);

// Algoritma Searching

// Sequantial Search

function sequentialSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
let numbers6 = [5, 2, 8, 3, 9, 1];
let target = 8;
let result = sequentialSearch(numbers6, target);
if(result !== -1) {
    console.log("Angka", target, "ditemukan pada indeks", result);
} else {
    console.log("Angka", target, "tidak ditemukan");
}

// Binary Search

function binarySearch(arr, target1) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target1) {
            return mid;
        } else if (arr[mid] < target1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 10;
let result1 = binarySearch(numbers7, target1);
if(result1 !== -1) {
    console.log("Angka", target1, "ditemukan pada indeks", result1);
} else {
    console.log("Angka", target1, "tidak ditemukan");
}
