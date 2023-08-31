import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import axios from "../axios/axiosInstance";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import DishItem from "./DishItem";
const DishForm = () => {
  const context = useContext(AuthContext);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [dish, setDish] = useState({
    name: "",
    description: "",
    type: "",
    allergenics: "none", // Default value
    category: "none", // Default value
    ingredients: [], // Default value
    price: 0,
  });

  const handleMenuFormChange = (e) => {
    const { name, value } = e.target;
    setDish((prevdish) => ({ ...prevdish, [name]: value }));
  };

  const handleMenuFormSubmit = (e) => {
    e.preventDefault();
    const finalDish = { ...dish };
    finalDish.ingredients = finalDish.ingredients.map((d) => {
      return { ...d, inventoryItem: d.inventoryItem._id };
    });

    axios
      .post("/api/dishes", finalDish)
      .then((res) => console.log("RES DATA", res.data))
      .catch((e) => console.log("POST ERRROR", e));
  };

  useEffect(() => {
    axios("/api/inventoryItems")
      .then((res) => {
        console.log("sdfsdfsdf", res.data);
        setInventoryItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory items:", error);
      });
  }, []);
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    setDish({
      ...dish,
      ingredients: [
        ...dish.ingredients,
        {
          inventoryItem: item,
          measurement: item.measurement,
          price: 0,
          quantity: 0,
        },
      ],
    });
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <>
      <form onSubmit={handleMenuFormSubmit}>
        <label htmlFor="name">Menu Name:</label>
        <input
          type="text"
          name="name"
          value={dish.name}
          onChange={handleMenuFormChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={dish.description}
          onChange={handleMenuFormChange}
          required
        />

        <label htmlFor="typeOfDish">Type of Dish:</label>
        <input
          id="typeOfDish"
          name="type"
          onChange={handleMenuFormChange}
          value={dish.typeOfDish}
          required
        />
        <label htmlFor="allergenics">Allergenics:</label>
        <select
          id="allergenics"
          name="allergenics"
          onChange={handleMenuFormChange}
          value={dish.allergenics}
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
          value={dish.category}
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
        <ReactSearchAutocomplete
          items={inventoryItems}
          maxResults={15}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          fuseOptions={{ keys: ["name"] }} // Search in the description text as well
          styling={{ zIndex: 3 }} // To display it on top of the search box below
        />
        <button>Submit</button>
      </form>
      <table>
        <thead>
          <th>Ingrednt</th>
          <th>Mesurement</th>
          <th>Amount</th>
          <th>Price</th>
        </thead>
        <tbody>
          {dish.ingredients.map((item) => (
            <DishItem
              key={item._id}
              item={item}
              dish={dish}
              setDish={setDish}
            />
          ))}
        </tbody>
      </table>
      <p>Total Price : {dish.price}$</p>
    </>
  );
};

export default DishForm;
