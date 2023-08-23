const express = require('express');

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
router.post('/', createUser);  // localhost:8000/api/user
router.get('/:id', getUserById); // localhost:8000/api/user/:id
router.put('/:id', updateUser); // localhost:8000/api/user/:id
router.delete('/:id', deleteUser); // localhost:8000/api/user/:id
router.post('/login', login);
router.post('/logout', logout);
router.get('/currentUser', authenticate, getLoggedInUser);

module.exports = router;

