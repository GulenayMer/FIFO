
const Table = () => {
  return (
    <div className="w-full">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold">Inventory Items</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
				  Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
				  Quantity
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
				  Measurement
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
				  Category
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
				  Season
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
				  Price
				  </th>
                </tr>
              </thead>
              <tbody>
				{inventoryItems &&  inventoryItems.map( (item) => (
					<tr  key={item._id}>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
					  <div className="flex">
						<div className="flex-shrink-0 w-10 h-10">
						  <img
							className="w-full h-full rounded-full"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
							alt=""
						  />
						</div>
						<div className="ml-3">
						  <p className="text-gray-900 whitespace-no-wrap">
						  {item.name}
						  </p>
						  <p className="text-gray-600 whitespace-no-wrap">000004</p>
						</div>
					  </div>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
					  <p className="text-gray-900 whitespace-no-wrap">{item.quantity}</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
					  <p className="text-gray-900 whitespace-no-wrap">{item.measurement}</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
					  <p className="text-gray-900 whitespace-no-wrap">{item.category}</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
					  <p className="text-gray-900 whitespace-no-wrap">{item.season}</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
					  <p className="text-gray-900 whitespace-no-wrap">{item.price}</p>
					</td>
				  </tr>
				))}
                
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
