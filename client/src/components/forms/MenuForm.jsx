import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth';
import instance from '../../components/axios/axiosInstance';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const MenuForm = () => {
  const context = useContext(AuthContext);
  const [dishes, setDishes] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [menu, setMenu] = useState({
    name: '',
    dishes: [],
  });

  /* fetch all dishes */
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
    setMenu((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const handleOnSelect = (item) => {
    setSelectedDish(item); // Store the selected dish
  };

  const addDishToMenu = () => {
    if (selectedDish) {
      setSelectedDishes([...selectedDishes, selectedDish]);
      setSelectedDish(null); // Clear the selected dish
    }
  };

  useEffect(() => {
    // Whenever selectedDishes changes, update the menu
    setMenu((prevFormState) => ({
      ...prevFormState,
      dishes: selectedDishes.map((dish) => dish.id), // Store only the dish IDs
    }));
  }, []);



  const handleMenuFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Menu', menu);
    context.handleMenu({...menu, dishes: selectedDishes});
  };

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const handleOnClear = () => {
    console.log('Cleared');
  };

  return (
    <>
      <form onSubmit={handleMenuFormSubmit}>
        <label htmlFor="name" className="text-red-600">
          Menu Name:
        </label>
        <input
          className="w-80 m-4 border-2 border-red-600"
          type="text"
          name="name"
          value={menu.name}
          onChange={handleMenuNameChange}
          required
        />

        <label htmlFor="category">Dishes:</label>
        <ReactSearchAutocomplete
          items={dishes}
          maxResults={15}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          fuseOptions={{ keys: ['name'] }}
        />

        <button
          className="bg-red-600 text-white px-3 py-1"
          onClick={addDishToMenu} // Add the selected dish to the menu
        >
          Add Dish
        </button>

        {/* Display selected dishes */}
        {selectedDishes.length > 0 && (
          <div>
            <h2>Selected Dishes:</h2>
            <ul>
              {selectedDishes.map((dish) => (
                <li key={dish._id}>{dish.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="bg-green-600 text-white px-3 py-1 my-10">
          Submit
        </button>
      </form>
    </>
  );
};

export default MenuForm;
