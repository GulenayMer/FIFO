import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../../components/axios/axiosInstance';

const UpdateInventoryItem = () => {
  const [updatedItem, setUpdatedItem] = useState(null);
  const { id } = useParams();

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
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  //handle submit function
  const handleSubmit = async (inventoryItem) => {
    try {
      const res = await instance.put(`api/inventoryItems/${id}`, inventoryItem);
      setUpdatedItem(res.data);
      console.log('update:', res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex align-middle justify-center items-center pb-10"
    >
      <label htmlFor="name">Item:</label>
      <input
        type="text"
        name="name"
        value={updatedItem?.name || ''}
        onChange={handleUpdate}
        required
      />

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="text"
        name="quantity"
        value={updatedItem?.quantity || ''}
        onChange={handleUpdate}
        required
      />

      <label htmlFor="measurement">Measurement:</label>
      <select
        id="measurement"
        name="measurement"
        onChange={handleUpdate}
        value={updatedItem?.measurement || ''}
        required
      >
        <option value="Gram">Gram</option>
        <option value="Kilogram">Kilogram</option>
        <option value="Milliliter">Milliliter</option>
        <option value="Liter">Liter</option>
      </select>

      <label htmlFor="price">price:</label>
      <input
        type="text"
        name="price"
        value={updatedItem?.price || ''}
        onChange={handleUpdate}
        required
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        onChange={handleUpdate}
        value={updatedItem?.category || ''}
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

      <label htmlFor="season">Season:</label>
      {/* <Headless setFormState={setFormState} /> */}
      <select
        id="season"
        name="season"
        onChange={handleUpdate}
        value={updatedItem?.season || ''}
        required
      >
        <option value="N/A">N/A</option>
        <option value="Summer">Summer</option>
        <option value="Spring">Spring</option>
        <option value="Winter">Winter</option>
        <option value="Autumn">Autumn</option>
      </select>

      <button>Submit</button>
    </form>
  );
};

export default UpdateInventoryItem;
