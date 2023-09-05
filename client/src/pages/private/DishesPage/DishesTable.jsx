import { useState, useEffect, useContext } from 'react';
import instance from '../../../components/axios/axiosInstance';

const DishesTable = () => {
  const [dishes, setDishes] = useState(null);

  const getAllDishes = async () => {
    try {
      const res = await instance.get('/api/dishes');
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
    <div className=" w-full min-h-[50vh] ">
      <h1 className="text-center pt-5 pb-5 font-bold text-4xl">Your Dishes:</h1>
      {dishes &&
        dishes.map((dish) => (
          <div
            key={dish._id}
            className=" bg-red-200"
          >
            <span className="text-3xl">{dish.name}</span>
            <span className="mt-2">{dish.description}</span>
            <div className="flex ">
              <label htmlFor="span">Course: </label>

              <span> {dish.type}</span>
            </div>
            <div>
              <label htmlFor="span">Costs: </label>
              <span>{dish.price}€</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DishesTable;
