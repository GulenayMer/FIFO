const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;
const oneHourInMS = 60 * 60 * 1000;

//Register
// TODO: Need to do the validation here for the FE
/* */
// POST Request for creating the User via UserSchema & it will save the it to our database
const createUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      res.status(404).json({ message: 'must provide name and email' });
    } else {
      console.log('anything');
      const newUser = await User.create(req.body);
      console.log('newUser: ', newUser);
      const user = {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      }; // this is for jwt payload, we do not need to pass every attribute in our data
      console.log('User : ', user);
      const accessToken = jwt.sign(user, SECRET);
      console.log('accessToken: ', accessToken);
      res
        .status(201)
        .cookie('accessToken', accessToken, {
          httpOnly: true,
          expires: new Date(Date.now() + oneHourInMS),
        })
        .json({ message: 'User created!', user });
    }
  } catch (error) {
    res.status(500).json({ message: 'Hello', errors: error.errors });
  }
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: '1 Invalid login attempt' });
  }
  try {
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      res.status(404).json({ message: '2 Invalid login attempt' });
    } else {
      const isPasswordValid = await bcrypt.compare(
        password,
        currentUser.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ message: '3 Invalid login attempt' });
      } else {
        const user = {
          _id: currentUser._id,
          name: currentUser.name,
          email: currentUser.email,
        };
        console.log('user _id is here', user._id);
        const accessToken = jwt.sign(user, SECRET);
        console.log('accessToken: ', accessToken);
        res
          .status(201)
          .cookie('accessToken', accessToken, {
            httpOnly: true,
            expires: new Date(Date.now() + oneHourInMS),
          })
          .json({ message: 'User logged in succesfully!', user });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const logout = (req, res) => {
  res.clearCookie('accessToken');
  res.json({ message: 'User logged out successfully!' });
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    /*    if (users.length === 0) {
      res.status(404).json({ message: 'Users not found' });
    } */
    console.log('All users : ', users);
    res.status(200).json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// /api/user/auth/currentUser
// This is to keep track of the logged in user?? I guess
const getLoggedInUser = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.user._id }).select(
      '-password'
    ); // or .select('_id email name')
    res.json({ currentUser });
    /// this would be res.json({ user: currentUser });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// GET Request for each user
const getUserById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findById(id);
    console.log('🚀 ~ file: users.js:41 ~ getUserById ~ user:', user);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

// PUT Request
const updateUser = async (req, res) => {
  try {
    const updatedUser = res
      .status(201)
      .json({ message: 'User updated!', newUser });
  } catch (error) {
    res.status(404).json({ message: error.message, errors: error.errors });
  }
};

// DELETE request
const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: error.message, errors: error.errors });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  login,
  logout,
  getLoggedInUser,
};
