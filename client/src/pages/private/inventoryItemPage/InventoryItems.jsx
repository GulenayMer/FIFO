import InventoryItemForm from '../../../components/forms/InventoryItemForm';
import DefaultLayout from '../../../components/layout/DefaultLayout';
import InventoryItemTable from './InventoryItemTable';
import UpdateInventoryItem from './UpdateInventoryItem';

const InventoryItems = () => {
  return (
    <DefaultLayout>
      <div className="flex align-middle justify-center items-center flex-col w-full py-5 px-5 ">
        <InventoryItemForm />

        <InventoryItemTable />
        <UpdateInventoryItem />
      </div>
    </DefaultLayout>
  );
};

export default InventoryItems;
