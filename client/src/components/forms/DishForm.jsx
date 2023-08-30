import { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';

const DishForm = () => {
  const context = useContext(AuthContext);

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    typeOfDish: '',
    allergenics: '',
    category: '',
    //ingredients:
  });

  const handleMenuFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };
  const handleMenuFormSubmit = (e) => {
    e.preventDefault();
    console.log('formState:', formState);
    context.handleMenu(formState);
  };

  return (
    <>
      <form onSubmit={handleMenuFormSubmit}>
        <label htmlFor="name">Menu Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleMenuFormChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={handleMenuFormChange}
          required
        />

        <label htmlFor="typeOfDish">Type of Dish:</label>
        <input
          id="typeOfDish"
          name="typeOfDish"
          onChange={handleMenuFormChange}
          value={formState.typeOfDish}
          required
        />
        <label htmlFor="allergenics">Allergenics:</label>
        <select
          id="allergenics"
          name="allergenics"
          onChange={handleMenuFormChange}
          value={formState.allergenics}
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

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          onChange={handleMenuFormChange}
          value={formState.category}
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
        <button>Submit</button>
      </form>
    </>
  );
};

export default DishForm;
