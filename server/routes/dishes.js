const express = require('express');

//
const router = express.Router();


// get all logic
const {
	createDish,
	getAllDishes,
	getDishById,
	updateDish,
	deleteDish,
} = require('../controllers/Dish');


//
router.get('/', getAllDishes);
router.post('/', createDish);  // localhost:8000/api/dish
router.get('/:id', getDishById); // localhost:8000/api/dish/:id
router.put('/:id', updateDish); // localhost:8000/api/dish/:id
router.delete('/:id', deleteDish); // localhost:8000/api/dish/:id

module.exports = router;
