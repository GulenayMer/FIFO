require('dotenv/config');
const connectDB = require('./config/database');
const express = require('express');
const usersRouter = require('./routes/users');
const inventoryItemsRouter = require('./routes/inventoryItems');


//
const app = express();
const PORT = 8000;

app.use(express.json());

// ROUTES 

// TODO : 
/**
 * 1) Import The User Routes
 * 2) Import The Inventory Item Routes
 * 3) Import The Inventory Routes
 * 4) Import The Dish Routes
 * 5) Import The Menu Routes
 */

// This will be the baseURL : localhost:8000/api/user
app.use('/api/user', usersRouter);
app.use('/api/inventoryItems', inventoryItemsRouter);





/* app.post('/inventoryItem', async (req, res) => {
  try {
    const newInventoryItem = await InventoryItem.create(req.body);

    res
      .status(201)
      .json({ message: 'newInventoryItem created!', newInventoryItem });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
}); */



connectDB().then(() => {
  app.listen(PORT, () => console.log('🚀 ~ file: index.js:11 ~ PORT:', PORT));
});
