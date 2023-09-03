const DishItem = ({ item }) => {
	return (
	  <>
		{item && (
		  <tr key={item._id}>
			<td>{item?.inventoryItem?.name}</td>
			<td>{item?.inventoryItem?.measurement}</td>
			<td>{`${item.quantity}`}</td>
			<td>{item?.price}</td>
		  </tr>
		)}
	  </>
	);
  };
  
  export default DishItem;
  
  




/* const DishItem = ({ item, dish, setDish }) => {
	const handleAmount = (e) => {
	  e.preventDefault();
	  const quantity = Number(e.target.quantity.value);
	  let price = 0; // Initialize price with a default value
  
	  if (item?.inventoryItem) {
		price = quantity * item.inventoryItem.price;
		const newItem = { ...item.inventoryItem };
  
		const ingredients = dish.ingredients.map((ingredientItem) => {
		  if (ingredientItem.inventoryItem._id === newItem._id) {
			return { ...ingredientItem, quantity, price };
		  } else {
			return ingredientItem;
		  }
		});
  
		const totalDishPrice = dish.price + price;
		const newDish = { ...dish, ingredients, price: totalDishPrice };
  
		setDish(newDish);
	  }
	};
  
	return (
	  <>
		  {item && (
			<tr key={item._id}>
			  <td>{item?.inventoryItem?.name}</td>
			  <td>{item?.inventoryItem?.measurement}</td>
			  <td>
				<form onSubmit={handleAmount}>
				  <input type="text" name="quantity" />
				  <button>Calc</button>
				</form>
			  </td>
			  <td>{item?.price}</td>
			</tr>
		  )}
		
	  </>
	);
  };
  
  export default DishItem;
   */