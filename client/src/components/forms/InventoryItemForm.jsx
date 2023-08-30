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
    <>
      <form onSubmit={handleInventoryFormSubmit}>
        <label htmlFor="name">Item:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInventoryFormChange}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formState.quantity}
          onChange={handleInventoryFormChange}
          required
        />

        <label htmlFor="measurement">Measurement:</label>
        <select
          id="measurement"
          name="measurement"
          onChange={handleInventoryFormChange}
          value={formState.measurement}
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
          value={formState.price}
          onChange={handleInventoryFormChange}
          required
        />

        <label htmlFor="category">Category:</label>
        <select
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

        <label htmlFor="season">Season:</label>
        <Headless
          setFormState={setFormState}
          //selected={handleInventoryFormChange(selected)}
          // setSelected={setSelected}
          // seasons={seasons}
        />
        {/*       <select
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
        </select> */}

        <button>Submit</button>
      </form>
    </>
  );
};

export default InventoryItemForm;
