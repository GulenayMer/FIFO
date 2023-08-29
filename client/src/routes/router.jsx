import Home from '../pages/Home';
import Profile from '../pages/private/Profile';
import Menu from '../pages/private/Menu';
import Dishes from '../pages/private/Dishes';
import Inventory from '../pages/private/Inventory';
import InventoryItems from '../pages/private/InventoryItems';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import MenuForm from '../components/forms/MenuForm';
import InventoryItemForm from '../components/forms/InventoryItemForm';
import DishForm from '../components/forms/DishForm';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/register',
    element: <RegisterForm />,
  },
  {
    path: '/dish',
    element: <DishForm />,
  },
  {
    path: '/inventoryItem',
    element: <InventoryItemForm />,
  },
  {
    path: '/menu',
    element: <MenuForm />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/dishes',
    element: <Dishes />,
  },
  {
    path: '/inventoryItems',
    element: <InventoryItems />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router;
