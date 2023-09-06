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
    <>
      <div className=" w-full min-h-[50vh] flex flex-col justify-center items-center  ">
        <h2 className="text-2xl font-bold mt-5 mb-10">DISHES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-[100%] 2xl:w-[80%] cursor-pointer">
          {dishes &&
            dishes.map((dish) => (
              <div
                key={dish._id}
                className="bg-gray-50 py-6 px-3 shadow-md rounded-md gap-4 text-center flex flex-col justify-start items-center w-full"
              >
                <span className=" text-purple-600 text-xl font-semibold uppercase mb-1">
                  {dish.name}
                </span>
                <span className="text-gray-600 text-md ">
                  {dish.description}
                </span>
                <div className="flex ">
                  <label htmlFor="span">Course: </label>
                  <span className="text-gray-600 text-md "> {dish.type}</span>
                </div>
                <div>
                  <label htmlFor="span">Costs: </label>
                  <span className="ml-1 text-purple-400 italic font-semibold">
                    {dish.price.toFixed(2)}€
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DishesTable;
