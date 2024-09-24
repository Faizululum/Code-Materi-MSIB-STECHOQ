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