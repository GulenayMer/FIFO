const express = require('express');

//
const router = express.Router();

const authenticate = require('../middlewares/authentication');

// get all logic
const {
  createMenu,
  getAllMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
} = require('../controllers/menus');

router.use(authenticate);
//
router.get('/', getAllMenus);
router.post('/', createMenu); // localhost:8000/api/menu
router.get('/:id', getMenuById); // localhost:8000/api/menu/:id
router.put('/:id', updateMenu); // localhost:8000/api/menu/:id
router.delete('/:id', deleteMenu); // localhost:8000/api/menu/:id

module.exports = router;
