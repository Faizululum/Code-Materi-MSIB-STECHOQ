const transactionRepository = require('./transaction.repository');
const itemRepository = require('../item/item.repository');

// Create transaction
async function borrowItem(userId, itemId, quantityBorrowed) {
    const newTransaction = await transactionRepository.createTrasaction(userId, itemId, quantityBorrowed);
    return newTransaction;
}

// Get all transactions
async function getAllTransactions() {
    const transactions = await transactionRepository.findTransactions();
    return transactions;
}

// Get transaction by userId
async function getTransactionByUserId(userId) {
    const transaction = await transactionRepository.findTransactionById(userId);
    return transaction;
}

// Get transaction by Id
async function getTransactionById(transactionId) {
    const transaction = await transactionRepository.findTransactionById(transactionId);
    return transaction;
}

// Update transaction status
async function verifyTransaction(transactionId, status) {
    const transaction = await transactionRepository.findTransactionById(transactionId);
    if (!transaction) {
        throw new Error('Transaction not found');
    }
    
    await transactionRepository.updateTransactionStatus(transactionId, status, status === "BORROWED" ? "borrowedAt" : null);

    if (status === "BORROWED") {
        const item = await itemRepository.findItemById(transaction.itemId);
        if (!item) {
            throw new Error('Item not found');
        }

        const newQuantity = item.quantity - transaction.quantityBorrowed;
        if (newQuantity < 0) {
            throw new Error('Not enough quantity in the item');
        }

        await itemRepository.updateItemQuantity(item.id, newQuantity);
    }
}

// Return Item
async function returnItem(transactionId) {
    const transaction = await transactionRepository.findTransactionById(transactionId);
    if (!transaction) {
        throw new Error('Transaction not found');
    }

    if(transaction.status !== "BORROWED") {
        throw new Error('Transaction is not borrowed');
    }

    await transactionRepository.updateTransactionStatus(transactionId, "RETURNED", "returnedAt");

    const item = await itemRepository.findItemById(transaction.itemId);
    const newQuantity = item.quantity + transaction.quantityBorrowed;
    await itemRepository.updateItemQuantity(item.id, newQuantity);
}

module.exports = {
    borrowItem,
    getAllTransactions,
    getTransactionByUserId,
    getTransactionById,
    verifyTransaction,
    returnItem,
};