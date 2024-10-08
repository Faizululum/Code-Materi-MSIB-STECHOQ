const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// Create user
router.post("/", async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get user by id
router.get("/:id", async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await userService.getUserById(userId);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Edit user by id
router.patch("/:id", async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const userData = req.body;
        const updatedUser = await userService.editUserById(userId, userData);

        delete updatedUser.password;
        res.status(200).send({data: updatedUser, message: 'User updated successfully'});
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete user by id
router.delete("/:id", async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        await userService.deleteUserById(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;