/* const User = require('../models/inventoryItem');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/inventoryItem', async (req, res) => {
	try{
		const newInventoryItem = await newInventoryItem.create(req.body);
		//console.log("🚀 ~ file: users.js:6 ~ createUser ~  newUser :",  newUser )
		res.status(201).json({message: 'newInventoryItem created!', newInventoryItem});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}) */