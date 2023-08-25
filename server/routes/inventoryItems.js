const express = require('express');

//
const router = express.Router();

const authenticate = require('../middlewares/authentication');

// get all logic
const {
  createInventoryItem,
  getAllInventoryItems,
  getInventoryItemById,
  getInventoryItemByInUse,
  updateInventoryItem,
  deleteInventoryItem,
} = require('../controllers/inventoryItems');
router.use(authenticate);
//
router.get('/', getAllInventoryItems); // localhost:8000/api/inventoryItems/
router.post('/', createInventoryItem); // localhost:8000/api/inventoryItems
router.get('/inUse', getInventoryItemByInUse); // localhost:8000/api/inventoryItems/:id
router.get('/:id', getInventoryItemById); // localhost:8000/api/inventoryItems/:id
router.put('/:id', updateInventoryItem); // localhost:8000/api/inventoryItems/:id
router.delete('/:id', deleteInventoryItem); // localhost:8000/api/inventoryItems/:id

module.exports = router;
