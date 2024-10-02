const prisma = require('../db');

async function createUser(userData) {
    try {
        const newUser = await prisma.user.create({ data:userData });
        return newUser;
    } catch (error) {
        throw new Error('Failed to create user in repository');
    }
}

module.exports = { createUser };