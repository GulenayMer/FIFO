import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import axios from "../axios/axiosInstance";
import { ReactSearchAutocomplete } from "react-search-autocomplete";


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
  const [gramsQuantity, setGramsQuantity] = useState(0);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    axios("/api/inventoryItems")
      .then((res) => {
        console.log("Inventory items:", res.data);
        setInventoryItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory items:", error);
      });
  }, []);


  const handleOnSelect = (item) => {
	setSelectedItem(item);
	setGramsQuantity(0); // Clear any previous quantity
  };
  


  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };


  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const handleIngredientChange = (e, index) => {
  //console.log('Current ingredient:', dish.ingredients[index]);
    const { name, value } = e.target;
	//console.log('Updating quantity with value:', value);
    const updatedIngredients = [...dish.ingredients];
    updatedIngredients[index][name] = value;
	//console.log('Updated ingredients:', updatedIngredients);
    setDish({ ...dish, ingredients: updatedIngredients });
  };
  const handleQuantityPrompt = () => {
	if (selectedItem) {
	  const gramsQuantityInput = prompt(`Enter the quantity in ${selectedItem.measurement} for this ingredient:`);
	  if (gramsQuantityInput !== null) {
		const parsedQuantity = parseFloat(gramsQuantityInput);
		if (!isNaN(parsedQuantity)) {
		  let ingredientPrice = 0;
  
		  switch (selectedItem.measurement) {
			case 'Gram':
			  // Calculate price per gram
			  ingredientPrice = parsedQuantity * (selectedItem.price / 1000);
			  break;
			case 'Kilogram':
			  // The price is already in the correct unit (e.g., price per kilogram)
			  ingredientPrice = parsedQuantity * selectedItem.price;
			  break;
			case 'Milliliter':
			  // Calculate price per milliliter
			  ingredientPrice = parsedQuantity * (selectedItem.price / 1000);
			  break;
			case 'Liter':
			  // The price is already in the correct unit (e.g., price per liter)
			  ingredientPrice = parsedQuantity * selectedItem.price;
			  break;
			case 'Unit':
				// The price is already in the correct unit (e.g., price per liter)
				ingredientPrice = parsedQuantity * selectedItem.price;
				break;
			default:
			  // Handle unknown measurement type
			  console.error("Unknown measurement type");
			  break;
		  }
		  ingredientPrice = ingredientPrice * 2;
		  ingredientPrice = Number(ingredientPrice.toFixed(2));
		  //console.log(dish.ingredients.find(e => console.log(e) ));
		  if (dish.ingredients.find(e => e.inventoryItem === selectedItem._id)) {
			console.log("sameee");
		  }else{
			setDish({
				...dish,
				ingredients: [
				  ...dish.ingredients,
				  {
					inventoryItem: selectedItem._id,
					measurement: selectedItem.measurement,
					price: ingredientPrice,
					quantity: parsedQuantity,
				  },
				],
				price:dish.price + ingredientPrice
			  });
	  
			  // Clear the grams quantity input
			  setGramsQuantity(0);
		  }
		 
		} else {
		  // Handle invalid input
		  console.error("Invalid quantity entered");
		}
	  }
	  console.log("selected item", selectedItem);
	} else {
	  // Handle the case where no item is selected
	  console.error("No item selected");
	}
  };
  
  
/* this is for removing the ingredient */
  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...dish.ingredients];
    updatedIngredients.splice(index, 1);
    setDish({ ...dish, ingredients: updatedIngredients });
  };

    /* this is for input values */
  const handleMenuFormChange = (e) => {
    const { name, value } = e.target;
    setDish((prevdish) => ({ ...prevdish, [name]: value }));
  };


  /* helper function -- calculates the total price for the diish */
  const calculateDishTotalPrice = (ingredients) => {
	let totalPrice = 0;
	ingredients.forEach((ingredient) => {
	  totalPrice += ingredient.price;
	});
	return totalPrice;
  };
  
  /* This is for the form submit -- will create a dish */
  const handleMenuFormSubmit = (e) => {
    e.preventDefault();
    const finalDish = { ...dish };
    finalDish.ingredients = finalDish.ingredients.map((ingredient) => ({
      inventoryItem: ingredient.inventoryItem,
      measurement: ingredient.measurement,
      price: ingredient.price,
      quantity: ingredient.quantity,
    }));

    // Calculate the total price of the dish
    finalDish.price = calculateDishTotalPrice(finalDish.ingredients);

    console.log( "final dish", finalDish);
	console.log("price", finalDish.price);
    context.handleDish(finalDish);
  };

  

  return (
    <>
      <form onSubmit={handleMenuFormSubmit} className="border-2 border-red-700">
        <label htmlFor="name">Dish Name:</label>
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

        <label htmlFor="type">Type of Dish:</label>
        <select
          name="type"
          value={dish.type}
          onChange={handleMenuFormChange}
          required
        >
          <option value="">Select type</option>
          <option value="Starter">Starter</option>
          <option value="Main">Main</option>
          <option value="Dessert">Dessert</option>
          <option value="Side">Side</option>
        </select>

        <label htmlFor="allergenics">Allergenics:</label>
        <select
          name="allergenics"
          value={dish.allergenics}
          onChange={handleMenuFormChange}
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
          name="category"
          value={dish.category}
          onChange={handleMenuFormChange}
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
        <label htmlFor="category">Ingredients:</label>
        <ReactSearchAutocomplete
          items={inventoryItems}
          maxResults={15}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          fuseOptions={{ keys: ["name"] }}
        
        />
		{/* Ingredients */}
        <div>
          
        {dish.ingredients.map((ingredient, index) => (
		<div key={index}>
			<label htmlFor={`ingredient-${index}-measurement`}>Measurement:</label>
			<input
				type="text"
				id={`ingredient-${index}-measurement`}
				name={`ingredient-${index}-measurement`}
				value={ingredient.measurement}
				onChange={(e) => handleIngredientChange(e, index)}
			/>
			<label htmlFor={`ingredient-${index}-quantity`}>Quantity:</label>
			<input
				type="number"
				id={`ingredient-${index}-quantity`}
				name={`ingredient-${index}-quantity`}
				value={isNaN(ingredient.quantity) ? '' : ingredient.quantity}
				onChange={(e) => handleIngredientChange(e, index)}
			/>
			<button type="button" onClick={() => handleRemoveIngredient(index)}>
				Remove
			</button>
		</div>
		))}
		<button type="button" onClick={handleQuantityPrompt}>
            Add Ingredient
		</button>
	</div>
        <button type="submit">Submit</button>
    </form>

	
<div className="m-10 border-2 border-red-600">
  <table>
    <thead>
      <tr>
        <th>Ingredient</th>
        <th>Measurement</th>
        <th>Amount</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {dish.ingredients && dish.ingredients.map((item, index) => (
        <tr key={index}>
          <td>{item?.name}</td>
          <td>{item?.measurement}</td>
          <td>{`${item.quantity}`}</td>
          <td>{item?.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <p>Total Price : {dish.price}$</p>
</div>
 
    </>
  );
};

export default DishForm;
