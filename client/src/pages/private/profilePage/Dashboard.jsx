import {TbMeat, TbMilk} from 'react-icons/tb';
import { FaApple, FaFish} from 'react-icons/fa'; 
import {PiBowlFoodFill} from 'react-icons/pi'
import {MdFastfood} from 'react-icons/md'

const getIconByProductType = (productType) => {
  switch (productType) {
    case 'Vegetables':
      return <FaApple />;
    case 'Sea Food':
      return <FaFish />;
    case 'Meat Product':
      return <TbMeat />;
    case 'Milk Products':
      return <TbMilk/>;
    default:
      return null; 
  }
};

const getIconByProductType2 = (productType) => {
	switch (productType) {
	  case 'Street Food':
		return <PiBowlFoodFill />;
	  case 'Fish Soup':
		return <FaFish />;
	  case 'Hamburger':
		return <MdFastfood/>;
	  case 'Bowl':
		return <PiBowlFoodFill/>;
	  default:
		return null; 
	}
  };
  

const inventory = 
[
	{
		id: 1, 
		title: 'Vegetables',
		total:' $5,210.66',
	},
	{
		id: 2, 
		title: 'Sea Food',
		total:' $1,210.66',
	},
	{
		id: 3, 
		title: 'Meat Product',
		total:' $2,210.66',
	},
	{
		id: 4, 
		title: 'Milk Products',
		total:' $2,210.66',
	},
]

const menu  = 
[
	{
		id: 1, 
		title: 'Fish Soup',
		total:' ',
		placeholder:'LC'
	},
	{
		id: 2, 
		title: 'Bowl',
		total:' ',
		placeholder:'SF'
	},
	{
		id: 3, 
		title: 'Hamburger',
		total:' ',
		placeholder:'MK'
	},
	{
		id: 4, 
		title: 'Street Food',
		total:'',
		placeholder:'FD'
	},
]

const DashboardSection = () => {

	

  return (
    <main className="bg-gray-100 h-full w-full">
      <section>
        <header className="border-b border-solid border-gray-200 bg-gray-100">
          <h2 className="pt-5 px-3 text-lg font-semibold">Profile Dashboard</h2>
        </header>
        <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
          <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
            Inventory Overview
          </header>
          <section className="flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
              <span className="text-xs font-medium text-gray-500 uppercase">TOTAL INVENTORY ITEMS</span>
              <div className="py-4 flex items-center justify-center text-center">
                <span className="mr-4 text-3xl">100</span>
                <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">+9.1%</span>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
              <span className="text-xs font-medium text-gray-500 uppercase">PREDICTED MONTHLY REVENUE</span>
              <div className="py-4 flex items-center justify-center text-center">
                <span className="mr-4 text-3xl">$10,576</span>
                <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">+12.0%</span>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
              <span className="text-xs font-medium text-gray-500 uppercase">PREDICTED MONTHLY EXPENSES</span>
              <div className="py-4 flex items-center justify-center text-center">
                <span className="mr-4 text-3xl">3520</span>
                <span className="inline-flex items-center bg-red-500 h-6 px-2 rounded text-white text-xs">-12</span>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r flex flex-col items-center">
              <span className="text-xs font-medium text-gray-500 uppercase">TOTAL</span>
              <span className="block py-4 text-gray-500 text-3xl">$7000,10</span>
            </div>
          </section>
        </section>

        <div className="flex flex-wrap flex-row">
          <div className="w-full lg:w-1/2">
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                Inventory
              </header>
              <section className="overflow-x-auto w-full">
                <table className="w-full" cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
					{ inventory &&  inventory.map( (i) => 
					(
						<tr key={inventory.id}>
                      <td className="p-2 py-4 border-b border-solid border-gray-300">
                        <div className="pl-4 flex flex-wrap flex-row items-center">
                          <div className="mr-4 h-12 w-12 bg-gray-600 rounded-full  flex flex-row justify-center items-center text-white">
						  {getIconByProductType(i.title)} 
						</div>
                          <div className="text-gray-700">{i.title}</div>
                        </div>
                      </td>
                      <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">
						{i.total}
					  </td>
                    </tr>
					)) }
                  </tbody>
                </table>
              </section>
            </section>
          </div>
          <div className="w-full lg:w-1/2">
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                Latest Menus
              </header>
              <section className="overflow-x-auto w-full">
                <table className="w-full" cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
					{menu && menu.map( (i) => (
					<tr key={i.id}>
                      <td className="p-2 py-4 border-b border-solid border-gray-300">
                        <div className="pl-4 flex flex-wrap flex-row items-center">
                          <div className="mr-4 h-12 w-12 bg-red-600 rounded-full flex flex-row justify-center items-center text-white">
						  {getIconByProductType2(i.title)} 
							</div>
                          <div className="text-gray-700">{i.title}</div>
                        </div>
                      </td>
                      <td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700"></td>
                    </tr>
					))}
                    
                  </tbody>
                </table>
              </section>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardSection;
