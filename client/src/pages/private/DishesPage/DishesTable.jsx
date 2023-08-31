import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../context/Auth';
import instance from '../../../components/axios/axiosInstance';

const DishesTable = () => {
  const [dishes, setDishes] = useState(null);

  const getAllDishes = async () => {
    try {
      const res = await instance.get('api/dishes');
      setDishes(res.data);
      console.log('Get all dishes DishTable', res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllDishes();
  }, []);

  return (
    <>
      <h1>DishesTable</h1>
      {dishes && dishes.map((dish) => <li key={dish._id}>{dish.name}</li>)}
    </>
  );
};

export default DishesTable;
