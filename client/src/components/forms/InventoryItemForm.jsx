import { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import Headless from './Headless';

const InventoryItemForm = () => {
  const context = useContext(AuthContext);

  const [formState, setFormState] = useState({
    name: '',
    quantity: '',
    measurement: '',
    price: '',
    category: '',
    season: '',
  });

  const handleInventoryFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };
  const handleInventoryFormSubmit = (e) => {
    e.preventDefault();
    console.log('formState:', formState);
    context.handleInventoryItem(formState);
  };

  return (
    <div className="flex align-middle items-center justify-between flex-col py-5 px-5 gap-5 w-[90%] m-auto border-gray-300 shadow-md rounded-lg bg-slate-50 mt-20">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Please add your item here:
      </h2>
      <form
        onSubmit={handleInventoryFormSubmit}
        className="flex align-middle justify-center items-center flex-col w-full pb-10 gap-3"
      >
        <div className="flex align-middle items-center justify-between py-5 px-5 gap-5  ">
          <div className="flex align-middle justify-baseline items-center gap-3">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="name"
            >
              Item name:
            </label>
            <div className="mt-2">
              <input
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInventoryFormChange}
                required
              />
            </div>
          </div>

          <div className="flex align-middle justify-baseline items-center gap-3">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="quantity"
            >
              Quantity:
            </label>
            <div className="mt-2">
              <input
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                type="text"
                name="quantity"
                value={formState.quantity}
                onChange={handleInventoryFormChange}
                required
              />
            </div>
          </div>

          <div className="flex align-middle justify-baseline items-center gap-3">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="measurement"
            >
              Measurement:
            </label>
            <div className="mt-2">
              <select
                className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                id="measurement"
                name="measurement"
                type="text"
                onChange={handleInventoryFormChange}
                value={formState.measurement}
                required
              >
                <option value="Gram">Gram</option>
                <option value="Kilogram">Kilogram</option>
                <option value="Milliliter">Milliliter</option>
                <option value="Liter">Liter</option>
              </select>
            </div>
          </div>

          <div className="flex align-middle justify-baseline items-center gap-3">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="price"
            >
              price:
            </label>
            <div className="mt-2">
              <input
                className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                type="text"
                name="price"
                value={formState.price}
                onChange={handleInventoryFormChange}
                required
              />
            </div>
          </div>

          <div className="flex align-middle justify-baseline items-center gap-3">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="category"
            >
              Category:
            </label>
            <div className="mt-2">
              <select
                className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                id="category"
                name="category"
                onChange={handleInventoryFormChange}
                value={formState.category}
                required
              >
                <option value="N/A">N/A</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Fruit">Fruit</option>
                <option value="Meat">Meat</option>
                <option value="Milk Products">Milk Products</option>
                <option value="Fats">Fats</option>
                <option value="Oils">Oils</option>
                <option value="Grain">Grain</option>
                <option value="Nuts">Nuts</option>
                <option value="Herbs">Herbs</option>
                <option value="Fish">Fish</option>
                <option value="Seafood">Seafood</option>
                <option value="Other">Other</option>
                <option value="Poultry">Poultry</option>
                <option value="Protein">Protein</option>
              </select>
            </div>
          </div>

          <div className="flex align-middle justify-baseline items-center gap-3">
            <label
              className="text-sm font-medium leading-6 text-gray-900"
              htmlFor="season"
            >
              Season:
            </label>
            <div className="mt-2">
              {/* <Headless setFormState={setFormState} /> */}
              <select
                className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                id="season"
                name="season"
                onChange={handleInventoryFormChange}
                value={formState.season}
                required
              >
                <option value="N/A">N/A</option>
                <option value="Summer">Summer</option>
                <option value="Spring">Spring</option>
                <option value="Winter">Winter</option>
                <option value="Autumn">Autumn</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <button
            className="flex w-full justify-center rounded-md bg-emerald-800 px-3 py-1.5 
		  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline
		   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryItemForm;
