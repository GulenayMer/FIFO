import { createContext, useState, useEffect } from 'react';
import instance from '../components/axios/axiosInstance';
import { redirect } from 'react-router-dom';
// instantiation of createContext
export const AuthContext = createContext();

// Provider let us access to all the data & pass the data to the components needs to use it
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [inventoryItems, setInventoryItems] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [getDishes, setGetDishes] = useState(null);
  const [menu, setMenu] = useState(null);

  const handleStates = (user, loading, errors) => {
    setUser(user);
    setLoading(loading);
    setErrors(errors);
  };

  useEffect(() => {
    instance
      .get('/api/user/auth/currentUser')
      .then((res) => {
        console.log('Current USER ', res);
        handleStates(res.data.currentUser, false, null); /// WE NEEDED CURRENT USER AND NOT!!!!! USER!!!!!!!
        //handleStates(res.data.user, false, null); /// if we wanted it to work here => go to user.js(backend) and change the user to currentUser
        redirect('/');
      })
      .catch((error) => {
        console.log('currentUser', error);
        handleStates(null, false, null);
      });
  }, []);

  //--------------------------- USER ---------------------------//
  const handleLogin = async (user) => {
    setLoading(true);
    try {
      const res = await instance.post('api/user/auth/login', user);
      handleStates(res.data.user, false, null);
      console.log('this is auth user', res.data.user);
      //will change in the future "the looks" for logged in or not
      redirect('/');
    } catch (error) {
      console.log('this is error auth ', error);
      handleStates(null, false, error.response.data.errors);
    }
  };

  const handleRegister = async (user) => {
    setLoading(true);
    try {
      const res = await instance.post('api/user/auth/register', user);
      handleStates(res.data.user, false, null);
      redirect('/');
    } catch (error) {
      console.log(error.response);
      handleStates(null, false, error.response.data.errors);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await instance.post('api/user/auth/logout', {});
      handleStates(null, false, null);
      redirect('/');
      window.location.reload();
    } catch (error) {
      console.log(error.response);
      handleStates(null, false, error.response.data.errors);
    }
  };

  //------------------------ INVENTORY ITEM --------------------//
  // have to get the connection btw backend inventoryItem  & to the form

  const handleInventoryItem = async (inventoryItems) => {
    setLoading(true);
    try {
      const res = await instance.post('api/inventoryItems', inventoryItems);
      setInventoryItems(res.data.inventoryItems);
      setLoading(false);
      //redirect('/inventoryItems');
    } catch (error) {
      console.log(error.response);
      setInventoryItems(null);
    }
  };

  //------------------------ DISH --------------------//
  const handleDish = async (dishes) => {
    setLoading(true);
    try {
      const res = await instance.post('api/dishes', dishes);
      setDishes(res.data.newDish);
      setLoading(false);
      //redirect('/dishes');
    } catch (error) {
      console.log(error.response);
    }
  };

  const getAllDishes = async (getDishes) => {
    setLoading(true);
    try {
      const res = await instance.get('api/dishes', getDishes);
      setGetDishes(res.data.getDishes);
      console.log('Get all dishes auth', getDishes);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  //------------------------ MENU--------------------//
  const handleMenu = async (menu) => {
    setLoading(true);
    try {
      const res = await instance.post('api/menu', menu);
      setMenu(res.data.menu);
      setLoading(false);
      //redirect('/dishes');
    } catch (error) {
      console.log(error.response);
      setMenu(null);
    }
  };

  //------------------------ PASSING TO GLOBAL STATE --------------------//
  return (
    <AuthContext.Provider
      value={{
        user,
        dishes,
        loading,
        errors,
        handleLogin,
        handleRegister,
        handleLogout,
        handleInventoryItem,
        handleDish,
        getAllDishes,
        handleMenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
