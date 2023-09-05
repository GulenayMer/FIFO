import DefaultLayout from '../../components/layout/DefaultLayout';
import DishesTable from '../private/DishesPage/DishesTable';
import DishForm2 from '../../components/forms/DishForm2';

const Dishes = () => {
  return (
    <DefaultLayout>
      <DishForm2 />
      <DishesTable />
    </DefaultLayout>
  );
};

export default Dishes;
