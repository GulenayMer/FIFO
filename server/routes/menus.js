const express = require('express');

//
const router = express.Router();


// get all logic
const {
	createMenu,
	getAllMenu,
	getMenuById,
	updateMenu,
	deleteMenu,
} = require('../controllers/Menu');


//
router.get('/', getAllMenu);
router.post('/', createMenu);  // localhost:8000/api/menu
router.get('/:id', getMenuById); // localhost:8000/api/menu/:id
router.put('/:id', updateMenu); // localhost:8000/api/menu/:id
router.delete('/:id', deleteMenu); // localhost:8000/api/menu/:id

module.exports = router;
