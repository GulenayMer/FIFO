const mongoose = require('mongoose');

const DishSchema = mongoose.Schema(
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
      enum: ['none', 'Starter', 'Main', 'Dessert', 'Side'], // limits the user from puttng anythig else than what we have here
      default: 'none',
      required: [true, 'Type of dish is Required'],
    },
    allergenics: {
      type: String,
      enum: [
        'none',
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
      default: 'none',
      required: [true, 'Allergenics is Required'],
    },
    category: {
      type: String,
      enum: [
        'none',
        'Vegan',
        'Vegetarien',
        'Pescetarian',
        'Meat',
        'Poultry',
        'Surf & Turf',
      ],
      default: 'none',
      required: [true, 'Category is Required'],
    },
    ingredients: [
      {
        inventory: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },
        amountNeeded: {
          measurement: {
            type: String,
            enum: ['Gram', 'Kilogram', 'Millilitre', 'Liter'],
          },
          price: Number,
          quantity: Number,
        },
      },
    ],
    dishPrice: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true, // created at, update at
  }
);

const model = mongoose.model('Dish', DishSchema);
module.exports = model;
