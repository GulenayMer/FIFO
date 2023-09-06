import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth';
import axios from '../axios/axiosInstance';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const DishForm2 = () => {
  const context = useContext(AuthContext);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');

  const [dish, setDish] = useState({
    name: '',
    description: '',
    type: '',
    allergenics: 'none', // Default value
    category: 'none', // Default value
    ingredients: [], // Default value
    price: 0,
  });

  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    axios('/api/inventoryItems')
      .then((res) => {
        console.log('res', res);
        setInventoryItems(res.data);
      })
      .catch((error) => {
        console.error('Error fetching inventory items:', error);
      });
  }, []);

  const handleAddIngredient = () => {
    setIngredients((prevIngs) => ({
      ...prevIngs,
      [selectedIngredient.name]: {
        inventoryItem: selectedIngredient.inventoryItem,
        ogMeasurement: selectedIngredient.measurement,
        ogPrice: selectedIngredient.price,
        ogQuantity: selectedIngredient.quantity,
        measurement: selectedIngredient.measurement,
        price: selectedIngredient.price,
        quantity: selectedIngredient.quantity,
      },
    }));
  };

  const handleChangeIngredient = (e, name) => {
    const isMeasurementChange = e.target.name === 'measurement';
    let currentQuantity = ingredients[name].quantity;

    if (isMeasurementChange) {
      const newMeasurement = e.target.value;

      if (newMeasurement === 'Kilogram' || newMeasurement === 'Liter') {
        currentQuantity = currentQuantity / 1000;
      } else {
        currentQuantity = currentQuantity * 1000;
      }
    }

    setIngredients((prevIngs) => ({
      ...prevIngs,
      [name]: {
        ...prevIngs[name],
        [e.target.name]: e.target.value,
        ...(isMeasurementChange ? { quantity: currentQuantity } : {}),
      },
    }));
  };
  // we take the previous state of the ingredients and desctructure it into a new object where we select the one we want to delete ("[name]: _") and spread the rest which we return to the setState function 8)
  const handleRemoveIngredient = (name) => {
    setIngredients((prevIngs) => {
      const { [name]: _, ...restOfIngredients } = prevIngs;
      return restOfIngredients;
    });
  };

  const calculateIngredientPrice = (ing) => {
    // Convert measurements to a standard unit (gram or milliliter)
    const toStandardUnit = (measurement, quantity) => {
      switch (measurement) {
        case 'Kilogram':
          return quantity * 1000;
        case 'Liter':
          return quantity * 1000;
        case 'Gram':
        case 'Milliliter':
        case 'Unit':
          return quantity;
        default:
          throw new Error(`Unknown measurement: ${measurement}`);
      }
    };

    // Convert original quantity to standard unit
    const ogQuantityInStandardUnit = toStandardUnit(
      ing.ogMeasurement,
      ing.ogQuantity
    );

    // Calculate price per standard unit
    const pricePerStandardUnit = ing.ogPrice / ogQuantityInStandardUnit;

    // Convert desired quantity to standard unit
    const quantityInStandardUnit = toStandardUnit(
      ing.measurement,
      ing.quantity
    );

    // Calculate the price for the desired quantity
    const result = pricePerStandardUnit * quantityInStandardUnit;

    return result;
  };

  // ======================================================================== //

  const handleOnIngredientSelect = (item) => {
    setSelectedIngredient(item);
  };

  const handleDishInputChange = (e) => {
    setDish((prevdish) => ({ ...prevdish, [e.target.name]: e.target.value }));
  };

  const handleDishFormSubmit = (e) => {
    e.preventDefault();
    const finalDish = { ...dish };
    finalDish.ingredients = Object.values(ingredients).map((ingredient) => ({
      inventoryItem: ingredient.inventoryItem,
      measurement: ingredient.measurement,
      price: calculateIngredientPrice(ingredient),
      quantity: ingredient.quantity,
    }));

    finalDish.price = finalDish.ingredients.reduce((acc, item) => {
      const base = acc + item.price;
      const total = base * 3 * 0.19;
      return total;
    }, 0);

    console.log('final dish', finalDish);
    console.log('price', finalDish.price);
    context.handleDish(finalDish);
  };

  return (
    <div className="flex align-middle items-center justify-between flex-col py-5 px-5 gap-5 w-[80%] mt-16 m-auto border-gray-300 shadow-md rounded-lg bg-gray-200/70">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Please add your dish here:
      </h2>
      <form
        onSubmit={handleDishFormSubmit}
        className="flex align-middle justify-center items-center flex-col w-full pb-10 gap-3"
      >
        <div className="flex align-middle items-center justify-between py-5 px-5 gap-5 ">
          <label
            className="text-sm font-medium leading-6 text-gray-900"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
            type="text"
            name="name"
            value={dish.name}
            onChange={handleDishInputChange}
            required
          />

          <label
            className="text-sm font-medium leading-6 text-gray-900"
            htmlFor="description"
          >
            Description:
          </label>
          <input
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
            type="text"
            name="description"
            value={dish.description}
            onChange={handleDishInputChange}
            required
          />

          <label
            className="text-sm font-medium leading-6 text-gray-900"
            htmlFor="type"
          >
            Type:
          </label>
          <select
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
            name="type"
            value={dish.type}
            onChange={handleDishInputChange}
            required
          >
            <option value="">Select type</option>
            <option value="Starter">Starter</option>
            <option value="Main">Main</option>
            <option value="Dessert">Dessert</option>
            <option value="Side">Side</option>
          </select>

          <label
            className="text-sm font-medium leading-6 text-gray-900"
            htmlFor="allergenics"
          >
            Allergenics:
          </label>
          <select
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
            name="allergenics"
            value={dish.allergenics}
            onChange={handleDishInputChange}
            required
          >
            <option value="none">None</option>
            <option value="Dairy/Lactose">Dairy/Lactose</option>
            <option value="Nuts">Nuts</option>
            <option value="Peanuts">Peanuts</option>
            <option value="Soy">Soy</option>
            <option value="Gluten">Gluten</option>
            <option value="Shellfish">Shellfish</option>
            <option value="Sesame">Sesame</option>
            <option value="Sugar">Sugar</option>
            <option value="Proteins">Proteins</option>
          </select>

          <label
            className="text-sm font-medium leading-6 text-gray-900"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
            name="category"
            value={dish.category}
            onChange={handleDishInputChange}
            required
          >
            <option value="none">N/A</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Meat">Meat</option>
            <option value="Poultry">Poultry</option>
            <option value="Surf & Turf">Surf & Turf</option>
          </select>
        </div>

        {/* Ingredients */}
        <div
          className="w-full m-auto text-center
        "
        >
          <div className="w-[20%] m-auto">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="category"
            >
              Please add your ingredient
            </label>
            <ReactSearchAutocomplete
              /*             styling={{
              ':focus': { ringColor: 'none' },
            }} */
              items={inventoryItems}
              maxResults={15}
              onSelect={handleOnIngredientSelect}
              fuseOptions={{ keys: ['name'] }}
            />
          </div>
          <button
            className="flex justify-center m-auto rounded-md bg-emerald-800 px-3 py-1.5 mt-4 mb-4
          text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            onClick={handleAddIngredient}
          >
            Add Ingredient
          </button>

          {Object.entries(ingredients)?.map(([name, ingredient], index) => (
            <div
              key={index}
              className="flex w-full align-middle justify-center items-center gap-8"
            >
              <div className="w-full border-b-2 pb-2 pt-2 flex align-middle justify-around items-center gap-5">
                <div className=" font-semibold italic w-[20%]">
                  {name.toLocaleUpperCase()}
                </div>
                <div className="flex justify-center align-middle items-center gap-2 ">
                  <label
                    className="text-sm font-medium leading-6  text-gray-900 "
                    htmlFor={`ingredient-${name}-measurement`}
                  >
                    Measurement:
                  </label>
                  <select
                    className="flex-1 pr-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
                    id={`ingredient-${name}-measurement`}
                    name="measurement"
                    value={ingredient.measurement}
                    type="text"
                    onChange={(e) => handleChangeIngredient(e, name)}
                    required
                  >
                    {(ingredient.measurement === 'Liter' ||
                      ingredient.measurement === 'Milliliter') && (
                      <>
                        <option value="Milliliter">Milliliter</option>
                        <option value="Liter">Liter</option>
                      </>
                    )}
                    {(ingredient.measurement === 'Gram' ||
                      ingredient.measurement === 'Kilogram') && (
                      <>
                        <option value="Gram">Gram</option>
                        <option value="Kilogram">Kilogram</option>
                      </>
                    )}
                    {ingredient.measurement === 'Unit' && (
                      <option value="Unit">Unit</option>
                    )}
                  </select>
                </div>
                <div>
                  <label
                    className=" flex-1 text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`ingredient-${name}-quantity`}
                  >
                    Quantity:
                  </label>
                  <input
                    className="flex-1 w-[20%] ml-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6"
                    type="number"
                    id={`ingredient-${name}-quantity`}
                    name="quantity"
                    value={ingredient.quantity}
                    onChange={(e) => handleChangeIngredient(e, name)}
                  />
                </div>
                <div>
                  <span className="flex-1 text-sm font-medium leading-6 text-gray-900">
                    Price:
                  </span>
                  <div className="flex-1">
                    {calculateIngredientPrice(ingredient).toFixed(2)}
                  </div>
                </div>
                <button
                  className="flex-1w-full mr-5 justify-center rounded-md bg-rose-600 px-3 py-1.5 
                              text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 
                              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  type="button"
                  onClick={() => handleRemoveIngredient(name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="flex justify-center rounded-md bg-emerald-800 px-3 py-1.5 
            text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DishForm2;
