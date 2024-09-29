const express = require('express');
const router = express.Router();
const authService = require('./auth.service');
router.post('/register', async (req, res, next) => {
    try {
        const newUser = await authService.register(username, email, password);
        res.status(201).json({data:{username: newUser.username, email: newUser.email, password: newUser.password}, message: 'User Registered Successfully'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;