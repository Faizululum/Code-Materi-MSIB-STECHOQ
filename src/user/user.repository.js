const prisma = require('../db');

// Create user
async function insertUser(userData) {
    const newUser = await prisma.user.create({
        data: {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            role: userData.role,
        },
    });
    return newUser;
}

// Get all users
async function findUsers(){
    const users = await prisma.user.findMany({
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    return users;
}

// Get user by id
async function findUserById(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(userId),
        },
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    return user;
}   

// Update user by id
async function editUser(id, userData) {
    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(id),
        },
        data: {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            role: userData.role,
        },
    });
    return updatedUser;
}

// Delete user by id
async function deleteUser(id) {
    await prisma.user.delete({
        where: {
            id: parseInt(id),
        },
    });
}

module.exports = {
    insertUser,
    findUsers,
    findUserById,
    editUser,
    deleteUser,
};