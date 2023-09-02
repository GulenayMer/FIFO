import Home from '../pages/Home';
import Profile from '../pages/private/profilePage/Profile';
import Menu from '../pages/private/menuPage/Menu';
import Dishes from '../pages/private/Dishes';
import InventoryItems from '../pages/private/inventoryItemPage/InventoryItems';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import DishForm from '../components/forms/DishForm';
import ProtectedRoute from '../components/layout/ProtectedRoute';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dish',
        element: <DishForm />,
      },
      {
        path: '/inventoryItems',
        element: <InventoryItems />,
      },
      {
        path: '/menu',
        element: <Menu />,
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
    ],
  },

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
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router;
