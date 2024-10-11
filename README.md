# CRUD API Documentation

## Overview
This API provides CRUD operations for managing items, users, and transactions. Each resource (Item, User, Transaction) has its own set of endpoints, allowing you to create, retrieve, update, and delete records.

## Prerequisites
- Node.js
- Prisma ORM
- Express

Ensure that Prisma is correctly set up and connected to your database.

---

### Endpoints Overview

---

## Item Endpoints

- **POST /items/**  
  Add a new item.

  **Request Body**:  
  ```json
  {
    "name": "Item name",
    "description": "Item description",
    "quantity": 10
  }
  ```

- **GET /items/**  
  Retrieve all items.

- **GET /items/:id**  
  Retrieve an item by its ID.

  **Params**:  
  - `id`: The ID of the item.

- **PUT /items/:id**  
  Update an item by its ID.

  **Request Body**:  
  ```json
  {
    "name": "Updated item name",
    "description": "Updated description",
    "quantity": 5
  }
  ```

- **DELETE /items/:id**  
  Delete an item by its ID.

---

## User Endpoints

- **POST /users/**  
  Add a new user.

  **Request Body**:  
  ```json
  {
    "username": "User name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **GET /users/**  
  Retrieve all users.

- **GET /users/:id**  
  Retrieve a user by their ID.

  **Params**:  
  - `id`: The ID of the user.

- **PATCH /users/:id**  
  Update a user by their ID.

  **Request Body**:  
  ```json
  {
    "username": "Updated username",
    "email": "updated_email@example.com"
  }
  ```

- **DELETE /users/:id**  
  Delete a user by their ID.

---

## Transaction Endpoints

- **POST /transactions/borrow**  
  Borrow an item (create a new transaction).

  **Request Body**:  
  ```json
  {
    "userId": 1,
    "itemId": 101,
    "quantityBorrowed": 3
  }
  ```

- **GET /transactions/**  
  Retrieve all transactions.

- **GET /transactions/user**  
  Retrieve transactions by user ID.

  **Request Body**:  
  ```json
  {
    "userId": 1
  }
  ```

- **GET /transactions/:id**  
  Retrieve a transaction by its ID.

  **Params**:  
  - `id`: The ID of the transaction.

- **PATCH /transactions/verify/:transactionId**  
  Update transaction status.

  **Request Body**:  
  ```json
  {
    "status": "verified"
  }
  ```

- **POST /transactions/return/:transactionId**  
  Return an item by transaction ID.

  **Request Body**:  
  ```json
  {
    "userId": 1
  }
  ```

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Faizululum/Code-Materi-MSIB-STECHOQ.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database using Prisma:

```bash
npx prisma migrate dev
```

4. Run the server:

```bash
npm start
```

---

### Conclusion

This API provides flexible CRUD operations for managing items, users, and transactions in your system. For further improvements, consider adding authentication, validation, and enhanced error handling.

---

You can now adapt and save this as your `README.md` file for the project!
