import { useState, useEffect } from 'react';
import instance from '../../../components/axios/axiosInstance';

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
    name: '',
    quantity: '',
    measurement: '',
    price: '',
    category: '',
    season: '',
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
            <button>update</button>
            <button>toggle</button>
          </ul>
        ))}
    </div>
  );
}

export default InventoryItemTable;
