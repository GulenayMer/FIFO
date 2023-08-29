const express = require('express');
const authenticate = require('../middlewares/authentication');
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
  getLoggedInUser,
  getAllUsers,
} = require('../controllers/users');

//
router.get('/', getAllUsers); // localhost:8000/api/user/auth
router.post('/register', createUser); // localhost:8000/api/user/auth/register
router.post('/login', login); // localhost:8000/api/user/auth/login

// THIS IS OUR GUARD
router.use(authenticate);
//
router.get('/currentUser', getLoggedInUser); //  We have to pass the two function to verify which user.
router.get('/:id', getUserById); // localhost:8000/api/user/auth/:id
router.put('/:id', updateUser); // localhost:8000/api/user/auth/:id
router.delete('/:id', deleteUser); // localhost:8000/api/user/auth/:id
router.post('/logout', logout); // localhost:8000/api/user/auth/logout

module.exports = router;
