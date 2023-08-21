const mongoose = require('mongoose');

//
const menuSchema = mongoose.Schema(
  {
    typeOfDish: {
      type: String,
      enum: ['N/A', 'Starter', 'Main', 'Dessert', 'Side'], // limits the user from puttng anythig else than what we have here
      default: 'N/A',
      required: [true, 'Type of dish is Required'],
    },
    dishPrice: {
      type: Number,
    },
    dishes: [
      {
        dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' },
        name: String,
        category: String,
        allergenics: Array,
        typeOfDish: String,
        price: Number,
      },
    ],
  },
  {
    timestamps: true, // created at, update at
  }
);

const model = mongoose.model('Menu', menuSchema);
module.exports = model;
