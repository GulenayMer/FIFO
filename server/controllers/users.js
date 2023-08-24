const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;
const oneHourInMS = 60 * 60 * 1000;

//Register
// TODO: Need to do the validation here for the FE
/* */
// POST Request for creating the User via UserSchema & it will save the it to our database
const createUser = async ( req, res) => {
	try{
		const newUser = await User.create(req.body);
		if(!newUser.body.name || !newUser.body.email){
			res.status(404).json({message: "must provide name and email"});
		}
		console.log("newUser: ", newUser );
		const user = {_id: newUser._id, name: newUser.name, email: newUser.email };  // this is for jwt payload, we do not need to pass every attribute in our data
		const accessToken = jwt.sign(user, SECRET);
		console.log("accessToken: ", accessToken);
		res.status(201)
			.cookie("accessToken", accessToken, {httpOnly:true, expires:new Date(Date.now() + oneHourInMS)})
			.json({message: 'User created!', user});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}


//Login
const login = async (req, res) => {
	const{ email, password } = req.body;
	if(!email || !password){
		res.status(400).json({message: 'Invalid login attempt'})
	} 
	try{
		const currentUser = await User.findOne({ email });
		if (!currentUser){
			res.status(404).json({message: 'Invalid login attempt'});
		}else{
			console.log("🚀 ~ file: users.js:36 ~ login ~ currentUser:", currentUser.password, password)
			const isPasswordValid = await bcrypt.compare(password, currentUser.password);
			if(!isPasswordValid){
				res.status(400).json({message: 'Invalid login attempt'})
			}
			const user = {_id: currentUser._id, name: currentUser.name, email: currentUser.email };
			const accessToken = jwt.sign(user, SECRET);
			console.log("accessToken: ", accessToken);
			res.status(201)
			.cookie("accessToken", accessToken, {httpOnly:true, expires:new Date(Date.now() + oneHourInMS)})
			.json({message: 'User logged in succesfully!', user});
		}
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

 const logout = (req, res) =>{
	res.clearCookie('accessToken');
	res.json({message: "User logged out successfully!"})
 };

 // This is to keep track of the logged in user?? I guesss
 const getLoggedInUser = async (req, res) => {
	try{
		const currentUser = User.findOne( {_id: req.user._id} ).select('-password')  // or .select('_id email name')
		res.json({currentUser});
		
	} catch(error) {
		res.json({message: error.message})
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
	login,
	logout,
	getLoggedInUser
}