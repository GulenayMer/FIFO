const Menu = require('../models/menu');

//
const createMenu = async (req, res) => {
  try {
    const newMenu = await Menu.create(req.body);
    res.status(201).json({ message: 'newMenu created!', newMenu });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

// GET all Menus
const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find(); // returns an array of all // GET all Menus
    console.log('All Inventory Items : ', menus);
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getMenuById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const item = await Menu.findById(id);
    console.log('item:', item);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      console.log('Item not found');
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const updateMenu = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedMenu = await Menu.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log('updated menu : ', updatedMenu);
    if (!updatedMenu) {
      res.status(404).json({ message: 'No item to update' });
    }
    res.json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedMenu = await Menu.findOneAndDelete({ _id: id });
    if (!deletedMenu) {
      res.status(404).json({ message: ' Menu not found' });
    }
    res.json(deletedMenu);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

module.exports = {
  createMenu,
  getAllMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
};
