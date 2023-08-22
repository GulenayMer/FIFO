const express = require('express');

//
const router = express.Router();


// get all logic
const {
	createInventoryItem,
	getAllInventoryItems,
	getInventoryItemById,
	getInventoryItemsInUse,
	updateInventoryItem,
	deleteInventoryItem,
} = require('../controllers/inventoryItems');


//
router.get('/', getAllInventoryItems); // localhost:8000/api/inventoryItem/
router.post('/', createInventoryItem);  // localhost:8000/api/inventoryItem
router.get('/inUse', getInventoryItemsInUse); // localhost:8000/api/inventoryItem/:id
router.get('/:id', getInventoryItemById); // localhost:8000/api/inventoryItem/:id
router.put('/:id', updateInventoryItem); // localhost:8000/api/inventoryItem/:id
router.delete('/:id', deleteInventoryItem); // localhost:8000/api/inventoryItem/:id

module.exports = router;



