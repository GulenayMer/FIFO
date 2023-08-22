const mongoose = require('mongoose');

//
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is Required'],
		},
		email: {
			type:String, 
			unique:[true, 'Email is not unique'],
			required:[true, 'Email is Required'],
			validate:{
				validator: function(value){
					return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
				},
				message: 'Email is not valid',
			}
		},
		password:{
			type: String,
			minLength: [8, 'Password Must Be 8 characters or more!'],
			required: [true, 'Password is Required!'],
		},
		inventoryItemCollection:[{
			type: mongoose.Schema.Types.ObjectId, ref: 'InventoryItem'
		}],
		inventoryCollection:[{
			type: mongoose.Schema.Types.ObjectId, ref: 'Inventory'
		}],
		DishCollection:[{
			type: mongoose.Schema.Types.ObjectId, ref: 'Dish'
		}],
		MenuCollection:[{
			type: mongoose.Schema.Types.ObjectId, ref: 'Menu'
		}]
	},
	{
		timestamps: true // created at, update at
	}
)


const model = mongoose.model('User', userSchema);
module.exports = model;