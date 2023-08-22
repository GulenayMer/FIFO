const express = require('express');

//
const router = express.Router();


// get all logic
const {
	createInventory,
	getAllInventory,
	getInventoryById,
	updateInventory,
	deleteInventory,
} = require('../controllers/inventory');


//
router.get('/', getAllInventory);
router.post('/', createInventory);  // localhost:8000/api/inventory
router.get('/:id', getInventoryById); // localhost:8000/api/inventory/:id
router.put('/:id', updateInventory); // localhost:8000/api/inventory/:id
router.delete('/:id', deleteInventory); // localhost:8000/api/inventory/:id

module.exports = router;


