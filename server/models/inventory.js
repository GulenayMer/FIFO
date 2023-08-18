const mongoose = require('mongoose');


// 
const inventorySchema = mongoose.Schema(
	{
		name:{
			type:String,
			required: [true, 'Name is Required']
		},
		quantity:{
			type:Number,
			required: [true, 'Quantity is Required']
		},
		inventoryItem: [{
			inventoryItem: { type: mongoose.Schema.Types.ObjectId, ref: 'inventoryItem' },
			name: String,
			amountNeeded: String,
			price:Number
		}]
	},
	{
		timestamps: true // created at, update at
	}
)


const model = mongoose.model('inventory', inventorySchema);
module.exports = model;