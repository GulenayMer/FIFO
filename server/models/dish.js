const mongoose = require('mongoose');

const dishSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
    },
    description: {
      type: String,
    },
    typeOfDish: {
      type: String,
      enum: ['N/A', 'Starter', 'Main', 'Dessert', 'Side'], // limits the user from puttng anythig else than what we have here
      default: 'N/A',
      required: [true, 'Type of dish is Required'],
    },
    allergenics: {
      type: Array,
      enum: [
        'N/A',
        'Dairy/Lactose',
        'Nuts',
        'Peanuts',
        'Soy',
        'Gluten',
        'Shellfish',
        'Seasame',
        'Sugar',
        'Proteins',
      ],
      default: 'N/A',
      required: [true, 'Allergenics is Required'],
    },
    category: {
      type: String,
      enum: [
        'N/A',
        'Vegan',
        'Vegetarien',
        'Pescetarian',
        'Meat',
        'Poultry',
        'Surf & Turf',
      ],
      default: 'N/A',
      required: [true, 'Category is Required'],
    },
    ingredients: [
      {
        inventory: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },
        amountNeeded: {
			measurement:{
				type:String,
				enum: ['Gram', 'Kilogram', 'Millilitre', 'Liter']
			},
			price: Number,
			quantity: Number,
		},
      },
    ],
	dishPrice: {
		type:Number,
	},
	user:{
			type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}
  },
  {
    timestamps: true, // created at, update at penis hihihihi why not? because makes no sense. It's what they call a joke
  }
);

const model = mongoose.model('Dish', dishSchema);
module.exports = model;
