const mongoose = require('mongoose');


// 
const inventorySchema = mongoose.Schema(
	{
		inventoryItem: {
			inventoryItem: { type: mongoose.Schema.Types.ObjectId, ref: 'inventoryItem' },
		},
		user:{
			type: mongoose.Schema.Types.ObjectId, ref: 'User'
		}
	},
	{
		timestamps: true // created at, update at
	}
)


const model = mongoose.model('inventory', inventorySchema);
module.exports = model;