const mongoose = require('mongoose');

const InventoryItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is Required'],
      default: 1,
    },
    measurement: {
      type: String,
      enum: ['Gram', 'Kilogram', 'Millilitre', 'Liter'], // validation enum for mongoose obj, kg, gr, lt, ml
      required: [true, 'Measurement is Required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is Required'],
    },
    category: {
      type: String,
      enum: [
        'N/A',
        'Vegetable',
        'Fruit',
        'Meat',
        'Milk Products',
        'Fats',
        'Oils',
        'Grain',
        'Nuts',
        'Herbs',
        'Fish',
        'Seafood',
        'Other',
        'Polutry',
        'Protein',
      ],
      default: 'N/A',
    },
    season: {
      type: String,
      enum: ['N/A', 'Summer', 'Spring', 'Winter', 'Autumn'],
      default: 'N/A',
    },
    inUse: {
      type: Boolean,
      required: [true, 'In Use is Required'],
      default: false,
    },
    history: [
      {
        date: {
          type: Date,
          required: [true, 'Date is Required'],
        },
        pricePerUnit: {
          quantity: {
            type: Number,
            required: [true, 'Quantity is Required'],
            default: 1,
          },
          measurement: {
            type: String,
            enum: ['Gram', 'Kilogram', 'Millilitre', 'Liter'], // validation enum for mongoose obj, kg, gr, lt, ml
            required: [true, 'Measurement is Required'],
          },
          price: {
            type: Number,
            required: [true, 'Quantity is Required'],
          },
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true, // created at, update at
  }
);

const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);
module.exports = InventoryItem;
