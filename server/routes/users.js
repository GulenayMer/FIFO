const express = require('express');
const authenticate = require('../middlewares/authentication')
//
const router = express.Router();


// get all logic
const {
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
	logout,
	getLoggedInUser
} = require('../controllers/users');


//
router.post('/register', createUser);  // localhost:8000/api/user/register
router.get('/:id', getUserById); // localhost:8000/api/user/:id
router.put('/:id', updateUser); // localhost:8000/api/user/:id
router.delete('/:id', deleteUser); // localhost:8000/api/user/:id
router.post('/login', login);  // localhost:8000/api/user/login
router.post('/logout', logout);  // localhost:8000/api/user/logout
router.get('/currentUser', authenticate, getLoggedInUser); // We have to pass the two function to verify which user. 

module.exports = router;

