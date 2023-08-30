import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const Navigation = () => {
  const { user, handleLogout } = useContext(AuthContext);
  console.log('user:', user);

  return (
    <nav className="flex align-middle justify-between items-center w-full  h-10 py-5 px-5 bg-slate-500">
      <ul className="flex flex-row justify-between align-middle items-center w-full ">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Home
          </NavLink>
        </li>

        {/* conditional for if user logged in  */}
        {user ? (
          <>
            {/*  if user logged in (profile, inventoryItem,menu,dish,logout,) */}
            <li>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                hi {user.name}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <button onClick={handleLogout}>Logout</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dishes"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Dishes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventoryItems"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Inventory Items
              </NavLink>
            </li>
          </>
        ) : (
          <>
            {/*  if user Not logged in (register && login) */}
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
