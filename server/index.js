require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const InventoryItem = require('./models/inventoryItem');

//
const app = express();
const PORT = 8000;

app.use(express.json());
//

app.post('/inventoryItem', async (req, res) => {
  try {
    const newInventoryItem = await InventoryItem.create(req.body);

    res
      .status(201)
      .json({ message: 'newInventoryItem created!', newInventoryItem });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
});

const connectDB = async () => {
  try {
    console.log('Connection with mongodb');
    await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
  } catch (error) {
    console.log('Mongodb Connection Error', error);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(PORT, () => console.log('🚀 ~ file: index.js:11 ~ PORT:', PORT));
});
