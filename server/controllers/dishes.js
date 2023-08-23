const Dish = require('../models/dish');

//
const createDish = async (req, res) => {
	try{
		const newDish = await Dish.create(req.body);
		res.status(201).json({message: 'newDish created!',newDish});
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

// GET all Dishs
const	getAllDishes = async (req, res) => {
	try{
		const dishes = await Dish.find(); // returns an array of all // GET all Dishs
		console.log("All Dishes : ", dishes);
		res.status(200).json(dishes);
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

const	getDishById  = async (req, res) => {
	try{
		const{
			params: { id },
		} = req;
		const item = await Dish.findById(id);
		console.log("item:",item)
		if(!item){
			res.status(404).json({message:"Dish not found"})
			console.log("Dish not found")
		}
		res.json(item)
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
		
	}
}

const	updateDish  = async (req, res) => {
	try{
		const{
			params:{id},
			body,
		} = req;
		const updatedDish = await Dish.findOneAndUpdate( {_id:id}, body, {new:true} );
		console.log("updated Dish : ", updatedDish);
		if(!updatedDish){
			res.status(404).json({message : "No item to update"})
		}
		res.json(updatedDish);
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}


const	deleteDish  = async (req, res) => {
	try{
		const {
			params:{ id },
		} =req;
		const deletedDish = await Dish.findOneAndDelete({_id:id});
		if(!deletedDish){
			res.status(404).json({message : " Dish not found"})
		}
		res.json(deletedDish);
	}catch(error){
		res.status(500).json({message: error.message, errors: error.errors});
	}
}

	module.exports = {
	createDish,
	getAllDishes,
	getDishById,
	updateDish,
	deleteDish,
}