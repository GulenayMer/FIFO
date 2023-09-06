const InventoryItem = require('../models/inventoryItem');

const createInventoryItem = async (req, res) => {
  try {
    const newInventoryItem = await InventoryItem.create({
      ...req.body,
      user: req.user._id,
    });
    res
      .status(201)
      .json({ message: 'newInventoryItem created!', newInventoryItem });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

// GET all InventoryItems
const getAllInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find({ user: req.user._id }); // returns an array of all // GET all InventoryItems
    console.log('All Inventory Items : ', inventoryItems);
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getInventoryItemByInUse = async (req, res) => {
  try {
    const itemsInUse = await InventoryItem.find({
      user: req.user._id,
      inUse: true,
    });
    console.log('itemsInUse:', itemsInUse);
    if (itemsInUse.length === 0) {
      res.status(404).json({ message: 'no items in use' });
      console.log('no items in use');
    } else {
      res.json(itemsInUse); // to we need to spread? 🧨 No!!!! 😡
    }
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getInventoryItemById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const item = await InventoryItem.findById({ user: req.user._id, _id: id });
    console.log('item:', item);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      console.log('Item not found');
    } else {
      res.json(item);
    }
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const updateInventoryItem = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedItem = await InventoryItem.findOneAndUpdate(
      { user: req.user._id, _id: id },
      body,
      {
        new: true,
      }
    );
    console.log('updated item : ', updatedItem);
    if (!updatedItem) {
      res.status(404).json({ message: 'No item to update' });
    } else {
      res.json(updatedItem);
    }
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const deleteInventoryItem = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedItem = await InventoryItem.findOneAndDelete({ _id: id });
    if (!deletedItem) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      const deletedItem1 = deletedItem;
      console.log(deletedItem1);
      res.json(deletedItem);
    }
    /* const deletedItem = await InventoryItem.findOneAndDelete({
      user: req.user._id,
      id,
    });
    if (!deletedItem) {
      res
        .status(200)
        .json({ message: `${deletedItem.body.name} was deleted!` });
    }*/
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

module.exports = {
  createInventoryItem,
  getAllInventoryItems,
  getInventoryItemById,
  getInventoryItemByInUse,
  updateInventoryItem,
  deleteInventoryItem,
};
