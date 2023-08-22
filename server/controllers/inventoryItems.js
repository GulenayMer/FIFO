const InventoryItem = require('../models/InventoryItem');


const createInventoryItem = async (req, res) => {
	try{
		const newInventoryItem = await InventoryItem.create(req.body);
		res.status(201).json({message: 'newInventoryItem created!',newInventoryItem});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

// GET all InventoryItems
const	getAllInventoryItems = async (req, res) => {
	try{
		const inventoryItems = await InventoryItem.find(); // returns an array of all // GET all InventoryItems
		console.log("All Inventory Items : ", inventoryItems);
		res.status(200).json(inventoryItems);
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

const	getInventoryItemsInUse  = async (req, res) => {
	try{
	
        const allInUseItems = InventoryItem.find({'inUse': 'true'});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});

	} 
}
const	updateInventoryItem  = async (req, res) => {
	try{

	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});

	}
}

const	deleteInventoryItem  = async (req, res) => {
	try{

	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});

	}
	
}

	module.exports = {
		createInventoryItem,
	getAllInventoryItems,
	getInventoryItemById,
	getInventoryItemsInUse,
	updateInventoryItem,
	deleteInventoryItem,
	
	}