import React from "react";

const DishItem = ({ item, dish, setDish }) => {
  const handleAmount = (e) => {
    e.preventDefault();
    const quantity = Number(e.target.quantity.value);
    const price = quantity * item.inventoryItem.price;
    const newItem = { ...item.inventoryItem };
    // dish -> ingredents -> [{inventoryItem:{},measurment,price,quantity}]
    console.log("OLLLLLD DISH", dish);
    const ingredients = dish.ingredients.map((ingredientItem) => {
      if (ingredientItem.inventoryItem._id === newItem._id) {
        console.log(
          "IngredientItem",
          ingredientItem,
          "NEW ITEEEM",
          newItem,
          "ITEEEM",
          item,
          price,
          quantity
        );
        return { ...item, quantity, price };
      } else {
        return ingredientItem;
      }
    });
    const totalDishPrice = dish.price + price;
    const newDish = { ...dish, ingredients, price: totalDishPrice };

    setDish(newDish);
    // we need to calculate the item price and update the item amount and price
    // update the dish price
    console.log("NEW DISH", newDish);
    /*
     ingredients: [
      {
        InventoryItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'InventoryItem',
        },

        measurement: {
          type: String,
          enum: ['Gram', 'Kilogram', 'Milliliter', 'Liter'],
        },
        price: Number,
        //this will b populated by a function in the FE on submit when creating the function
        quantity: Number,
        //200
      },
    ],
    */
  };
  return (
    <tr>
      <td>{item.inventoryItem.name}</td>
      <td>{item.inventoryItem.measurement}</td>
      <td>
        {" "}
        <form onSubmit={handleAmount}>
          <input type="text" name="quantity" />
          <button>Calc</button>
        </form>
      </td>
      <td>{item.price}</td>
    </tr>
  );
};

export default DishItem;
