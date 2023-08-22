const User = require('../models/User');
//const jwt = require('jsonwebtoken')

//
//const SECRET = process.env.JWT_SECRET;


// TODO : 
/**
 * 1) User Controller
 * 2) Inventory Item Controller
 * 3) Inventory Controller
 * 4) Dish Controller
 * 3) Menu Controller
 */

/** TODO
 * .find() --- findById
 * 	we need to filter according to inUse
 *  Mum I'm on TV
 * 
 */

// POST Request for creating the User via UserSchema & it will save the it to our database
const createUser = async ( req, res) => {
	try{
		const newUser = await User.create(req.body);
		console.log("🚀 ~ file: users.js:6 ~ createUser ~  newUser :",  newUser )
		res.status(201).json({message: 'newUser created!', newUser});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

// GET Request for each user
const getUserById = async ( req, res) => {
	try{
		const {params: {_id: id}
	} = req;
		const user = await Book.findById({_id:id})
		console.log("🚀 ~ file: users.js:41 ~ getUserById ~ user:", user);
		if (!user){
			res.status(404).json({message: 'User not found'});
		}
		res.status(200).json({user});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

// PUT Request
const updateUser = async ( req, res) => {
	try{
		
		const updatedUser = 
		res.status(201).json({message: 'User updated!', newUser});
	}catch(error){
		res.status(404).json({message: error.message, errors: error.errors});
	}
}


// DELETE request
const deleteUser = async ( req, res) => {
	try{
		
	}catch(error){
		res.status(404).json({message: error.message, errors: error.errors});
	}
}



module.exports = {
	createUser,
	getUserById,
	updateUser,
	deleteUser,
/* 	logout,
	getLoggedInUser,
	login */
}