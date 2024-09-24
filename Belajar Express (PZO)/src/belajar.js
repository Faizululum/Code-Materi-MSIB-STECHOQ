// Functions
function add(a, b) {
    console.log(a + b);
}

add(1, 2);

function sayHello() {
    console.log('Hello World!');
}

sayHello();

// Functions return value
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// Optional parameters
function name(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

name('Faizul');
name('Faizul', 'Doe');

// Default parameters
function name(firstName, lastName = 'Doe') {
    console.log(firstName + ' ' + lastName);
}

name('Faizul');
name('Faizul', 'null');

// Rest parameters
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    document.writeln(`<p>Total ${name}: ${total}</p>`);
}

sum("Orange", 12, 34, 56, 78);

// Spread operator
const numbers = [1, 2, 3, 4, 5];
sum("test", numbers);
sum("test", ...numbers);

// Argument object (just for information)
function oldSum() {
    let total = 0;
    for (const item of arguments) {
        total += item;
    }
    document.writeln(`<p>Total: ${total}</p>`);
}

oldSum(1, 2, 3, 4, 5);

// function sebagai value
function sayHello(name) {
    document.writeln(`<p>Hello ${name}!</p>`);
}

sayHello('Faizul');

const say = sayHello;
say('Budi');

// function sebagai parameter
function giveMeName(callback) {
    callback('Faizul'); // sayHello('Faizul');
}

giveMeName(sayHello);
giveMeName(say);

// Anonymous function
const anonym = function(name) {
    document.writeln(`<p>Hello ${name}!</p>`);
};

anonym('Faizul');

// Anonymous function with parameters
function giveMeName(callback) {
    callback("Faizul");
}

giveMeName(function(name) {
    document.writeln(`<p>Hello ${name}!</p>`);
});

// Nested function
function outer() {
    function inner() {
        console.log('inner');
    }
    inner();
}
// inner(); //error
outer();

// Scope
// Global scope
let counter = 0;

function hitMe() {
    // local scope
    counter++;
}

function other() {
    // local scope
    
}

hitMe();
hitMe();
console.log(counter);

function first() {
    //local scope
    let firstVariable = "first";
}

function second() {
    //local scope
    let secondVariable = "second";
}

// console.log(firstVariable); // error

// Nested function Scope
function firstNested() {
    //local scope
    let firstVariable = "first";
    function secondNested() {
        console.log(firstVariable);
    }
    secondNested();
}
// console.log(firstVariable); // error
firstNested();

// Recursive function
function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(1 * 2 * 3 * 4 * 5);

function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    }
    return value * factorialRecursive(value - 1);
}

console.log(factorialRecursive(5));
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 * factorialRecursive(2)
// 5 * 4 * 3 * 2 * factorialRecursive(1)
// 5 * 4 * 3 * 2 * 1

// Function Generator
function* createNames() {
    yield "Muhammad";
    yield "Faizul";
    yield "Ulum";
}

const names = createNames();
for (const name of names) {
    console.log(name);
}

function* buatGanjil(value) {
    for (let i = 0; i < value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}

const numbers1 = buatGanjil(100);
for (const number of numbers1) {
    console.log(number);
}

// Arrow function
// const hello = (name) => {
//     const say = `Hello ${name}`;
//     document.writeln(say);
// };

const hello = (name) => console.log(`Hello ${name}`);

hello('Faizul');

// const sum1 = (first, second) => {
//     return first + second;
// }

const sum1 = (first, second) => first + second;

console.log(sum1(1, 20));

// Arrow function with parameters
function giveMeName1 (callback) {
    callback("Faizul");
}

// Anonymous function 
giveMeName1(function(name) {
    document.writeln(`<p>Anonymus: ${name}!</p>`);
});

giveMeName1(name => console.log(`Arrow: ${name}!`));

// Closure
function createAdder(value) {
    const owner = "Faizul";

    function add(param){
        console.log(owner);
        return value + param;
    }

    return add;
}

const addTwo = createAdder(2);
// function addTwo(param){
//     console.log("Faizul");
//     return 2 + param;
// }
console.log(addTwo(10));
console.log(addTwo(20));

const addTen = createAdder(10);
