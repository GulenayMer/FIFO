const express = require('express');

//
const router = express.Router();


// TODO : 
/**
 * 1) User routes
 * 2) Inventory Item routes
 * 3) Inventory routes
 * 4) Dish routes
 * 3) Menu routes
 */


// get all logic
const {
	createUser,
	//getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
	// login,
	// logout,
	// getLoggedInUser
} = require('../controllers/users');


//
//router.get('/', getAllUsers); might not need it except for testing
router.post('/', createUser);  // localhost:8000/api/user
router.get('/:id', getUserById); // localhost:8000/api/user/:id
router.put('/:id', updateUser); // localhost:8000/api/user/:id
router.delete('/:id', deleteUser); // localhost:8000/api/user/:id

/* router.post('/register', createUser);
router.post('/login', login);
router.post('/logout', logout); */
//router.get('/currentUser', authenticate, getLoggedInUser);

module.exports = router;

