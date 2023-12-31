import { useState, useEffect } from 'react';
import instance from '../../../components/axios/axiosInstance';

const UpdateInventoryItem = ({ id }) => {
  const [updatedItem, setUpdatedItem] = useState({
    name: '',
    quantity: '',
    measurement: '',
    price: '',
    category: '',
    season: '',
  });
  //const { id } = useParams();

  // needs to get the inventory item that we want to change
  const getItem = async () => {
    try {
      const res = await instance.get(`api/inventoryItems/${id}`);
      setUpdatedItem(res.data);
      console.log('Before the update: ', res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  //handle change function
  const handleInputUpdate = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevState) => ({ ...prevState, [name]: value }));
  };

  //handle submit function
  const handleSubmit = async () => {
    try {
      const res = await instance.put(`api/inventoryItems/${id}`, updatedItem);
      setUpdatedItem(res.data);
      console.log('update:', res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <tr className="hidden">
        <td>
          <form id="updateForm"></form>
        </td>
      </tr>
      <tr>
        <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="name"
          >
            Item:
          </label>
          <input
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
            type="text"
            name="name"
            value={updatedItem?.name || ''}
            onChange={handleInputUpdate}
            required
            form="updateForm"
          />
        </td>
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="quantity"
          >
            Quantity:
          </label>
          <input
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
            type="text"
            name="quantity"
            value={updatedItem?.quantity || ''}
            onChange={handleInputUpdate}
            required
            form="updateForm"
          />
        </td>
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="measurement"
          >
            Measurement:
          </label>
          <select
            className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
            id="measurement"
            name="measurement"
            onChange={handleInputUpdate}
            value={updatedItem?.measurement || ''}
            required
            form="updateForm"
          >
            <option value="Gram">Gram</option>
            <option value="Kilogram">Kilogram</option>
            <option value="Milliliter">Milliliter</option>
            <option value="Liter">Liter</option>
            <option value="Unit">Unit</option>
          </select>
        </td>
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
            id="category"
            name="category"
            onChange={handleInputUpdate}
            value={updatedItem?.category || ''}
            required
            form="updateForm"
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
        </td>
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="season"
          >
            Season:
          </label>
          {/* <Headless setFormState={setFormState} /> */}
          <select
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
            id="season"
            name="season"
            onChange={handleInputUpdate}
            value={updatedItem?.season || ''}
            required
            form="updateForm"
          >
            <option value="N/A">N/A</option>
            <option value="Summer">Summer</option>
            <option value="Spring">Spring</option>
            <option value="Winter">Winter</option>
            <option value="Autumn">Autumn</option>
          </select>
        </td>
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="price"
          >
            price:
          </label>
          <input
            className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
            type="text"
            name="price"
            value={updatedItem?.price || ''}
            onChange={handleInputUpdate}
            required
            form="updateForm"
          />
        </td>
        <td className="flex justify-center items-center px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <label
            className="sr-only"
            htmlFor="action"
          >
            action:
          </label>
          <button
            className=" rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold 
            leading-6 text-white shadow-sm hover:bg-slate-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
            form="updateForm"
          >
            Save
          </button>
        </td>
      </tr>
    </>
  );
};

export default UpdateInventoryItem;
