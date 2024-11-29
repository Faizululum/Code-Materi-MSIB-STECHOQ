const prisma = require('../db');

// Create transaction
async function createTrasaction(userId, itemId, quantityBorrowed) {
    try {
        const newTransaction = await prisma.transaction.create({
            data: {
                userId,
                itemId,
                quantityBorrowed,
                status: "PENDING",
            },
        });
        return newTransaction;
    } catch (error) {
        throw new Error("Failed to create transaction");
    }
}

// Get all transactions
async function findTransactions() {
    try {
        const transactions = await prisma.transaction.findMany({
            include: {
                item: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return transactions;
    } catch (error) {
        throw new Error("Failed to fetch transactions");
    }
}

// Get transaction by userid
async function findTransactionByUserId(userId) {
    try {
        const transaction = await prisma.transaction.findMany({
            where: {
                userId: parseInt(userId),
            },
            include: {
                item: {
                    select: {
                        name: true,
                    },
                },
            },
        }); 
        return transaction;
    } catch (error) {
        throw new Error("Failed to fetch transactions by userId");
    }
}

// Get transaction by transactionId
async function findTransactionById(id) {
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        return transaction;
    } catch (error) {
        throw new Error("Failed to fetch transaction by transactionId");
    }
}

// Verify / Update transaction status
async function updateTransactionStatus(transactionId, status, timeStampField) {
    try {
        const updateData = {
            status,
        }

        if (timeStampField) {
            updateData[timeStampField] = new Date();
        }

        await prisma.transaction.update({
            where: {
                id: parseInt(transactionId),
            },
            data: updateData,
        });
    } catch (error) {
        throw new Error("Failed to update transaction status");
    }
}

module.exports = {
    createTrasaction,
    findTransactions,
    findTransactionByUserId,
    findTransactionById,
    updateTransactionStatus,
};