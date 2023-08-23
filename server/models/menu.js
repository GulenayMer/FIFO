const mongoose = require('mongoose');

//
const MenuSchema = mongoose.Schema(
  {
	name:{
		type:String
	},
    dishes: [
      {
        dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }
      }
    ],
	user:{
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}
  },
  {
    timestamps: true, // created at, update at
  }
);

const model = mongoose.model('Menu', MenuSchema);
module.exports = model;
