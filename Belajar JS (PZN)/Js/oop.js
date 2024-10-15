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

// Constructor & Property Class
class PersonC {

    constructor(name) {
        console.log(`Membuat Person ${name}`);
        this.name = name;
    }
}

const faiz4 = new PersonC("Faiz");
console.log(faiz4);
console.log(faiz4.name);

// Method Class
class PersonD {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

const faiz5 = new PersonD("Faiz");
console.log(faiz5);
faiz5.sayHello("Ulum");

const ulum5 = new PersonD("Ulum");
console.log(ulum5);
ulum5.sayHello("Faiz");

// Inheritance Class
class EmployeeC {
    sayHello(name) {
        console.log(`Hello ${name}, my name is Employee ${this.name}`);
    }
}

class ManagerC extends EmployeeC {
    sayHello(name) {
        console.log(`Hello ${name}, my name is Manager ${this.name}`);
    }
}

const faiz6 = new ManagerC();
faiz6.name = "Faiz";
faiz6.sayHello("Ulum");

const ulum6 = new EmployeeC();
ulum6.name = "Ulum";
ulum6.sayHello("Faiz");

// Super Constructor
class EmployeeD {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is Employee ${this.firstName}`);
    }
}

class ManagerD extends EmployeeD {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }
    sayHello(name) {
        console.log(`Hello ${name}, my name is Manager ${this.firstName}`);
    }
}
const ulum7 = new EmployeeD("Ulum");
ulum7.sayHello("Faiz");

const faiz7 = new ManagerD("Faiz", "Ulum");
faiz7.sayHello("Ulum");

// Super Method 
class Shape {
    paint(){
        console.log("Paint Shape");
    }
}

class Circle extends Shape {
    paint(){
        super.paint();
        console.log("Paint Circle");
    }
}

const circle = new Circle();
circle.paint();

// Getter and Setter
class PersonE {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

const faiz8 = new PersonE("Faiz", "Ulum");
console.log(faiz8);
console.log(faiz8.fullName);

// Public Class Field
class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {

    }
}

const customer = new Customer("faizul", "ulum");
console.log(customer);

// Private Class Field
class Counter {
    #counter = 0;

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());

counter.counter = 10;
//counter.#counter = 20; // error

console.log(counter);

// Private Method
class PersonF {

    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithName(name) {
        console.log(`Hello ${name}`);
    }

    #sayWithoutName() {
        console.log("hello");
    }

}

const faiz9 = new PersonF();
faiz9.say("faiz");

// Operator Instanceof
class EmployeeE {

}

class ManagerE {

}

const faiz10 = new EmployeeE();
const ulum10 = new ManagerE();

console.log(faiz10 instanceof EmployeeE);
console.log(faiz10 instanceof ManagerE);

console.log(ulum10 instanceof EmployeeE);
console.log(ulum10 instanceof ManagerE);

// instanceof in inharitance
class EmployeeF {

}

class ManagerF extends EmployeeF {

}

const faiz11 = new EmployeeF();
const ulum11 = new ManagerF();

console.log(faiz11 instanceof EmployeeF);
console.log(faiz11 instanceof ManagerF);

console.log(ulum11 instanceof EmployeeF);
console.log(ulum11 instanceof ManagerF);

// Static Class Field
class Configuration {
    static name = "Faiz Ulum";
    static age = 25;
    static nickname = "Faiz";
}

const config = new Configuration();
console.log(config);
console.log(config.name); // undifined

Configuration.nickname = "Fafa";
console.log(Configuration.name); // Faiz Ulum
console.log(Configuration.age); // 25
console.log(Configuration.nickname); // Faiz

// Static Class Method
class MathUtil {
    static add(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const add = MathUtil.add(1, 2, 3, 4, 5);
console.log(add);

// Error
class MathUtil2 {
    static add(...numbers) {
        
        if (numbers.length === 0) {
            throw new Error ("Tidak ada angka");
        }
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

// const add2 = MathUtil2.add();
// console.log(add2); Error

const result = MathUtil2.add(1, 2, 3, 4, 5);
console.log(result);

// Error Handling 
try {
    console.log(MathUtil2.add());
    console.log("Kode Block try akan terhentikan");
} catch (error) {
    console.log(`Terjadi error : ${error.message}`);
}

console.log("Faizul");