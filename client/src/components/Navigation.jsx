import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Menu
      </NavLink>
      <NavLink
        to="/dishes"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Dishes
      </NavLink>
      <NavLink
        to="/inventoryItems"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Inventory Items
      </NavLink>
      <NavLink
        to="/inventory"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Inventory
      </NavLink>
    </div>
  );
};

export default Navigation;
