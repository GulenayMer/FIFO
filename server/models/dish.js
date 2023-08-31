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
    type: {
      type: String,
      enum: ['none', 'Starter', 'Main', 'Dessert', 'Side'], // limits the user from putting anything else than what we have here
      default: 'none',
      required: [true, 'Type of dish is Required'],
    },
    allergenics: [
      {
        type: String,
        enum: [
          'none',
          'Dairy/Lactose',
          'Nuts',
          'Peanuts',
          'Soy',
          'Gluten',
          'Shellfish',
          'Sesame',
          'Sugar',
          'Proteins',
        ],
        default: 'none',
        required: [true, 'Allergenics is Required'],
      },
    ],
    category: {
      type: String,
      enum: [
        'none',
        'Vegan',
        'Vegetarian',
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
        inventoryItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'InventoryItem',
        },

        measurement: {
          type: String,
          enum: ['Gram', 'Kilogram', 'Milliliter', 'Liter'],
        },
        price: Number,
        //this will b populated by a function in the FE on submit when creating the function
        quantity: Number,
        //200
      },
    ],
    price: {
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
