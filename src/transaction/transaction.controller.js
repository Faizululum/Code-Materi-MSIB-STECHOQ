const express = require('express');
const router = express.Router();
const transactionService = require('./transaction.service');
const authorizeJWT = require('../middleware/authorizeJWT');
const adminAuthorization = require('../middleware/adminAuthorization');

// Create transaction
router.post("/borrow", authorizeJWT, async (req, res) => {
    try {
        const { userId, itemId, quantityBorrowed } = req.body;
        const newTransaction = await transactionService.borrowItem(userId, itemId, quantityBorrowed);
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get all transactions
router.get("/", adminAuthorization, async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        res.send(transactions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get transaction by userId
router.get("/user", authorizeJWT, async (req, res) => {
    const { userId } = req.body;
    try {
        const transaction = await transactionService.getTransactionByUserId(userId);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get transaction by Id
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await transactionService.getTransactionById(id);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Update transaction status
router.patch("/verify/:transactionId", adminAuthorization, async (req, res) => {
    try {
        const { transactionId } = req.params;
        const { status } = req.body;
        await transactionService.verifyTransaction(transactionId, status);
        res.status(200).json({ message: 'Transaction status updated successfully' });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Return Item
router.post("/return/:transactionId", authorizeJWT, async (req, res) => {
    try {
        const { transactionId } = req.params;
        const { userId } = req.body;

        const transaction = await transactionService.getTransactionById(transactionId);

        if(transaction.userId !== userId) {
            return res.status(403).json({ message: 'You are not authorized to return this item' });
        }

        await transactionService.returnItem(transactionId);
        res.status(200).json({ message: 'Item returned successfully' });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;