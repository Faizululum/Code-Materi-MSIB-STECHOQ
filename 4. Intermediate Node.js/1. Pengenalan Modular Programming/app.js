const express = require('express');
var mathUtils = require('./mathUtils');

const app = express();

console.log(mathUtils.add(1, 2));
console.log(mathUtils.subtract(10, 2));

// Singleton Pattern

let instance = null;

class logger {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    log(message) {
        console.log(`[Log]: ${message}`);
    }
}

const logger1 = new logger();
const logger2 = new logger();

console.log(logger1 === logger2);

logger1.log('pesan log 1');
logger2.log('pesan log 2');

// Factory Pattern

class Shape {
    draw() {

    }
}

class Circle extends Shape {
    draw() {
        console.log('drawing circle');
    }
}

class Square extends Shape {
    draw() {
        console.log('drawing square');
    }
}

class Triangle extends Shape {
    draw() {
        console.log('drawing triangle');
    }
}

class ShapeFactory {
    createShape(type) {
        switch (type) {
            case 'circle':
                return new Circle();
            case 'square':
                return new Square();
            case 'triangle':
                return new Triangle();
            default:
                throw new Error('Invalid shape type');
        }
    }
}

const factory = new ShapeFactory();
const circle = factory.createShape('circle');
const square = factory.createShape('square');
const triangle = factory.createShape('triangle');

circle.draw();
square.draw();
triangle.draw();

// Observer Pattern

class ChatRoom {
    constructor() {
        this.observers = [];
    }

    // Metode untuk menambahkan observer baru ke dalam chat room
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Metode untuk menghapus observer dari chat room
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Metode untuk memposting pesan ke semua observer
    notify(message) {
        this.observers.forEach(observer => {
            observer.update(message);
        });
    }
}

// Observer (Pengamat) - Pengguna

class User{
    constructor(name) {
        this.name = name;
    }

    // Metode yang dipanggil ketika ada update dari chat room
    update(message) {
        console.log(`${this.name} menerima pesan baru: ${message}`);
    }
}

// Penggunaan observer pattern

const chatRoom = new ChatRoom();

const user1 = new User('Alice');
const user2 = new User('Bob');
const user3 = new User('Charlie');

// Pengguna berlangganan ke chat room
chatRoom.subscribe(user1);
chatRoom.subscribe(user2);
chatRoom.subscribe(user3);

// Subjek mengirimkan pemberitahuan ke penggunan yang berlangganan
chatRoom.notify('Halo semua');

// Pengguna menghapus observer dari chat room
chatRoom.unsubscribe(user2);

// Subjek mengirimkan pemberitahuan kembali
chatRoom.notify('ini pesan baru');

// MVC (Model-View-Controller) Pattern

// Model
class UserModel {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `Nama: ${this.name}, Email: ${this.email}`;
    }
}

// View 
class UserView {
    displayUserInfo(userInfo) {
        console.log(userInfo);
    }
}

// Controller
class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    updateUserInfo(name, email) {
        this.model.name = name;
        this.model.email = email;
        this.view.displayUserInfo(this.model.getInfo());
    }
}

// Penggunaan MVC Pattern

const userModel = new UserModel('Alice', 'alice@example.com');
const view = new UserView();
const controller = new UserController(userModel, view);

// Mengupdate informasi pengguna
controller.updateUserInfo('Bob', 'bob@example.com');

// Pola Depedency Injection

class Database {
    query(sql, params) {
        // Simulate a database query
        return `Executing query: ${sql} with params: ${params}`;
    }
}

// Contoh kelas yang menggunakan dependency injection
class ProductService {
    constructor(database) {
        this.database = database;
    }

    getProduct(id) {
        return this.database.query('SELECT * FROM products WHERE id = ?', [id]);
    }
}

// Menggunakan dependency injection
const database = new Database(); // Membuat instance database
const productService = new ProductService(database); // Membuat objek database ke productService

// Menggunakan ProductService
const product = productService.getProduct(1); // Memanggil method getProduct() di productService

// Pola Middleware
// Middleware adalah sebuah fungsi yang dipanggil setelah sebuah request dijalankan
// Middleware dapat mengubah request yang dikirimkan ke sebuah server

// Middleware Logger
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request: ${req.method} ${req.url}`);
    next();
};

// Middleware Authentication
const authMiddleware = (req, res, next) => {
    // Cek apakah pengguna sudah login atau memiliki token yang valid
    if(req.headers.authorization === 'valid-token') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Middleware Response
const responseMiddleware = (req, res, next) => {
    res.send('Hello World!');
};

app.use(loggerMiddleware); // Menggunakan middleware logger untuk setiap permintaan
app.get('/',authMiddleware, responseMiddleware); // Menggunakan middleware response untuk permintaan ke path '/'

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});