const prisma = require('../db');

// pembuatan API Register
async function createUser(userData) {
    try {
        const newUser = await prisma.user.create({ data:userData });
        return newUser;
    } catch (error) {
        throw new Error('Failed to create user in repository');
    }
}

// pembuatan API Login
async function findUserByUsername(username) {
    return prisma.user.findUnique({
        where: { username }
    });
}

module.exports = { createUser, findUserByUsername };