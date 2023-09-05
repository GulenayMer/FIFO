import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth';
import instance from '../../components/axios/axiosInstance';

const MenuForm = () => {
  const context = useContext(AuthContext);
  const [dishes, setDishes] = useState(null);

  const [formState, setFormState] = useState({
    name: ' ',
    dishes: [{ name: ' ', typeOfDish: '' }],
  });

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

  const handleMenuNameChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const addDish = (e) => {
    e.preventDefault();
    setFormState((prevFormState) => ({
      ...prevFormState,
      dishes: [...prevFormState.dishes, { name: ' ', typeOfDish: ' ' }],
    }));
  };

  const handleMenuFormSubmit = (e) => {
    e.preventDefault();
    console.log('formState:', formState);
    context.postMenu(formState);
  };

  return (
    <>
      <form
        onSubmit={handleMenuFormSubmit}
        className="flex flex-col justify-center items-center"
      >
        <label
          htmlFor="name"
          className="text-red-600"
        >
          Menu Name:
        </label>
        <input
          className="w-80 m-4 border-2 border-red-600"
          type="text"
          name="name"
          value={formState.name}
          onChange={handleMenuNameChange}
          required
        />

        <label
          htmlFor="dishes"
          className="text-red-600"
        >
          Dishes:
        </label>
        <select
          id="dishes"
          name="dishes"
          onChange={handleMenuNameChange}
          value={formState.dishes.name}
          required
        >
          {dishes &&
            dishes.map((single) => (
              <>
                <option
                  key={single._id}
                  value={single.name}
                >
                  {single.name}
                </option>
                <span>Price: </span>
                <span>{single.price}</span>
              </>
            ))}
        </select>
        <button
          className="bg-red-600 text-white px-3 py-1"
          onClick={addDish}
        >
          Add Dish
        </button>
        <button className="bg-green-600 text-white px-3 py-1 my-10">
          Submit
        </button>
      </form>
    </>
  );
};

export default MenuForm;
