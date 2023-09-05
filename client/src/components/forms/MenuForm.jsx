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
    /* if (dishes.find(e => e._id === selectedDish._id)) {
		console.log("sameee");
	  }  */

    if (selectedDish) {
      console.log('not includes');
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
    context.handleMenu({ ...menu, dishes: selectedDishes });
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
    <div className='flex align-middle items-center justify-between flex-col py-2 px-5 gap-2 w-[80%] m-auto
		border-gray-300 shadow-md rounded-lg'>
	<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Please add your dish here:
	</h2>
	<form onSubmit={handleMenuFormSubmit}
	className="flex align-middle justify-center items-center flex-col w-full pb-10 gap-3"
		>
		<div className="flex align-middle items-center justify-between py-5 px-5 gap-5">
			<div  className="flex align-middle justify-baseline items-center gap-3">
				<label htmlFor="name" className="text-gray-600">
					Menu Name:
				</label>
			</div>
			<div>
				<input
					className="w-80 m-4 border-2 border-gray-400 rounded-md 
					focus:outline-none focus:ring-1 focus:ring-orange-300 focus:invalid:border-orange-500"
					type="text"
					name="name"
					value={menu.name}
					onChange={handleMenuNameChange}
					required
				/>
			</div>
		</div>
		<div className="flex align-middle justify-baseline items-center gap-3">
			<div className='text-sm font-medium leading-6 text-gray-900'>
				<label htmlFor="category" className="text-gray-600">Dishes:</label>
			</div>
			<div className="mt-2 w-80 ml-8">
			<ReactSearchAutocomplete
				items={dishes}
				maxResults={15}
				onSearch={handleOnSearch}
				onHover={handleOnHover}
				onSelect={handleOnSelect}
				onFocus={handleOnFocus}
				onClear={handleOnClear}
				inputProps={{
					style: {
					  outline: "none",
					  // Add any other custom styling here
					},
				  }}
				fuseOptions={{ keys: ['name'] }}/>
			</div>
		</div>
		<div className='flex w-full justify-center items-center mx-auto '>
		<button
          className="rounded-md bg-emerald-600 px-5 py-1.5 
		  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 "
          onClick={addDishToMenu} // Add the selected dish to the menu
        >
          Add Dish
        </button>
		</div>
       

        {/* Display selected dishes */}
        {selectedDishes.length > 0 && (
          <div className="flex  justify-between border-2 w-[50%] px-10">
			<h4 htmlFor="category" className="text-red-600">Selected Dishes:</h4>
            <ul className=''>
              {selectedDishes.map((dish) => (
                <li key={dish._id} className='italic capitalize'>{dish.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="bg-emerald-800 rounded-md
		text-sm font-semibold leading-6 text-white shadow-sm px-3 py-1 my-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MenuForm;
