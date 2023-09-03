import DefaultLayout from '../../../components/layout/DefaultLayout';
import MenuForm from '../../../components/forms/MenuForm';
import MenuTable from '../../private/menuPage/MenuTable';

const Menu = () => {
  return (
    <DefaultLayout>
      <div className='flex flex-col justify-center items-center m-20'>
		<MenuForm />
	 	{/* <MenuTable />  */}
      </div>
    </DefaultLayout>
  );
};

export default Menu;
