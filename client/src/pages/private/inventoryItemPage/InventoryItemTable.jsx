import { useState, useEffect } from 'react';
import instance from '../../../components/axios/axiosInstance';
import { redirect } from 'react-router-dom';
import summer from '../../../assets/20_tree_summer.svg'
import winter from '../../../assets/26_snowflake_winter_season.svg'
import autumn from '../../../assets/21_maple_autumn_season.svg'
import spring from '../../../assets/11_flower_spring_season.svg'

const theadStyle= `
px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase
`

const trStyle = `
px-5 py-5 border-b border-gray-200 bg-white text-sm
`

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
	<div className="w-full ">
	<div className="py-8">
	  <div>
		<h2 className="text-2xl font-semibold">Inventory Items</h2>
	  </div>
	  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
		<div className="inline-block w-[60%] shadow-md rounded-lg overflow-hidden">
		  <table className="min-w-full">
			<thead>
			  <tr>
				<th className={theadStyle}>
				Name
				</th>
				<th className={theadStyle}>
				Quantity
				</th>
				<th className={theadStyle}>
				Measurement
				</th>
				<th className={theadStyle}>
				Category
				</th>
				<th className={theadStyle}>
				Season
				</th>
				<th className={theadStyle}>
				Price
				</th>
			  </tr>
			</thead>
			<tbody>
			  {inventoryItems &&  inventoryItems.map( (item) => (
				  <tr  key={item._id}>
				  <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">					
					<p className="text-gray-900">
						{item.name}
					</p>
				  </td>
				  <td className={trStyle}>
					<p className="text-gray-900">{item.quantity}</p>
				  </td>
				  <td className={trStyle}>
					<p className="text-gray-900">{item.measurement}</p>
				  </td>
				  <td className={trStyle}>
					<p className="text-gray-900">{item.category}</p>
				  </td>
				  <td className={trStyle}>
				  <div className='flex'>
				  {item.season === 'Autumn' ? (
        		<div className="flex-shrink-0 w-10 h-10">
        			<img src={autumn} alt="Autumn" />
        		</div>
				) : item.season === 'Spring' ? (
        		<div className="flex-shrink-0 w-10 h-10">
				<img src={spring} alt="Spring" />
        		</div>
			) : item.season === 'Summer' ? (
        		<div className="flex-shrink-0 w-10 h-10">
        		<img src={summer} alt="Summer" />
        		</div>
			) : item.season === 'Winter' ? (
        		<div className="flex-shrink-0 w-10 h-10">
				<img src={winter} alt="Winter" />
        		</div>
		) : (
        <div className="flex-shrink-0 w-10 h-10">
        </div>
      )}
				<p className="text-gray-900 ">{item.season}</p>
				</div>
				  </td>
				  <td className={trStyle}>
					<p className="text-gray-900">{item.price}<span className='ml-1 italic font-semibold'>&euro;</span></p>
				
				  </td>
				</tr>
			  ))}
			  
		   
			</tbody>
		  </table>
		</div>
	  </div>
	</div>
  </div>
  /*   <div className="grid w-full ">
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
    </div> */
  );
}

export default InventoryItemTable;
