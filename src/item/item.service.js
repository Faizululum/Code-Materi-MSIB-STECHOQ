const { findItems, findItemById, insertItem, editItem, deleteItem } = require('./item.repository');

// Create item
async function createItem(itemData) {
    const newItem = await insertItem(itemData);
    return newItem;
}

// Get all items
async function getAllItems() {
    const items = await findItems();
    return items;
}

// Get item by id
async function getItemById(id) {
    const item = await findItemById(id);
    if (!item) {
        throw new Error('Item not found');
    }
    return item;
}

// Edit item by id
async function editItemById(id, itemData) {
    await getItemById(id);
    const updatedItem = await editItem(id, itemData);
    return updatedItem;
}

// Delete item by id
async function deleteItemById(id) {
    await getItemById(id);
    await deleteItem(id);
}

module.exports = { createItem, getAllItems, getItemById, editItemById, deleteItemById };