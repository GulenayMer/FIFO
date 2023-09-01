import { useState, useEffect } from 'react';
import instance from '../../../components/axios/axiosInstance';
import { redirect } from 'react-router-dom';

function InventoryItemTable() {
  const [inventoryItems, setInventoryItems] = useState(null);
  const [inventoryItemsInUse, setInventoryItemsInUse] = useState(null);

  //Get inventory items
  const getAllInventoryItem = async () => {
    try {
      const res = await instance.get('api/inventoryItems');
      setInventoryItems(res.data);
      console.log('get inventory', res.data);
      console.log('getInventoryItems', res.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  //handle function to update only between in use or not in use
  //Get inventory items in use
  const getAllInventoryItemInUse = async () => {
    try {
      const res = await instance.get('api/inventoryItems/inUse');
      setInventoryItemsInUse(res.data);
      console.log('getInventoryInUse', res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllInventoryItem();
    getAllInventoryItemInUse();
  }, []);

  /* 
1) when we click on the btn => item that we clicked on // return the item.
2) move the item into form in order to change it.
3) track the changes in state on the item that maches the id.
4) when we submit the form we want to update that spesific item and show it in the items list.
*/

  return (
    <div className="grid w-full ">
      <div className="grid grid-cols-8 grid-rows-1 py-2">
        <h2>Name</h2>
        <h2>Quantity</h2>
        <h2>Measurement</h2>
        <h2>Category</h2>
        <h2>Season</h2>
        <h2>Price</h2>
      </div>

      {inventoryItems &&
        inventoryItems.map((item) => (
          <ul
            key={item._id}
            className="grid grid-cols-8 grid-rows-1 py-2"
          >
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.measurement}</li>
            <li>{item.category}</li>
            <li>{item.season}</li>
            <li>{item.price}</li>
            <button onClick={(e) => {}}>update</button>
            <button>toggle</button>
          </ul>
        ))}
    </div>
  );
}

export default InventoryItemTable;
