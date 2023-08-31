import { useState, useEffect } from 'react';
import instance from '../../../components/axios/axiosInstance';

function InventoryItemTable() {
  const [inventoryItems, setInventoryItems] = useState(null);

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
  useEffect(() => {
    getAllInventoryItem();
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      {inventoryItems &&
        inventoryItems.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
          </div>
        ))}
    </div>
  );
}

export default InventoryItemTable;
