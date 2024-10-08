const bcrypt = require('bcrypt');
const { 
    insertUser, 
    findUserById, 
    findUsers, 
    editUser, 
    deleteUser
} = require('./user.repository');

// Create user
async function createUser(newUserData) {
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);

    newUserData.password = hashedPassword;

    const newUser = await insertUser(newUserData);
    return newUser;
}

// Get all users
async function getAllUsers() {
    const users = await findUsers();
    return users;
}

// Get user by id
async function getUserById(userId) {
    const user = await findUserById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

// Edit user by id
async function editUserById(id, userData) {
    if(userData.password){
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
    }
    await getUserById(id);
    
    const updatedUser = await editUser(id, userData);
    return updatedUser;
}

// Delete user by id
async function deleteUserById(id) {
    await getUserById(id);
    await deleteUser(id);
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById,
};