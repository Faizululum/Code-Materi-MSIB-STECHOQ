const express = require('express');
const { 
    getAllItems, 
    getItemById, 
    createItem, 
    editItemById, 
    deleteItemById
 } = require('./item.service');

const router = express.Router();

// Create item
router.post('/', async (req, res) => {
    try {
        const newItemData = req.body;
        const newItem = await createItem(newItemData);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await getAllItems();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get item by id
router.get("/:id", async (req, res) => {
    try {
        const itemId = parseInt(req.params.id);
        const item = await getItemById(itemId);
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Edit item by id
router.put("/:id", async (req, res) => {
    try {
        const itemId = req.params.id;
        const itemData = req.body;
        const updatedItem = await editItemById(itemId, itemData);
        res.send(updatedItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete item by id
router.delete("/:id", async (req, res) => {
    try {
        const itemId = req.params.id;
        await deleteItemById(itemId);
        res.sendStatus(204).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;