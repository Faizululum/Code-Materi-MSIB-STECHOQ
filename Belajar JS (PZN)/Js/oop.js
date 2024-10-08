// OOP
// constructor function
function Person() {
    this.firstName = "";
    this.lastName = "";
}

const faiz = new Person();
faiz.firstName = "Faiz";
const ulum = new Person();
ulum.firstName = "Faizul";
ulum.lastName = "Ulum";

console.log(faiz);
console.log(ulum);

// Method Constructor
function Person1() {
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function(name) {
        console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
    }
}

const faiz1 = new Person1();
faiz1.firstName = "Faiz first";
faiz1.lastName = "Faiz last";
faiz1.sayHello("Faiz");

console.log(faiz1);

// parameter constructor
function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name) {
        console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
    }
}

const faiz2 = new Person2("Faiz", "Ulum");
faiz2.sayHello("Faiz");

// Inheritance
function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function(name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
}

const faiz3 = new Manager("Faiz", "Ulum");
console.log(faiz3);


