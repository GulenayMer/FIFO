import DefaultLayout from '../../components/layout/DefaultLayout';
import DishesTable from './DishesPage/dishesTable';

const Dishes = () => {
  return (
    <DefaultLayout>
      <h1>Dishes</h1>
      <DishesTable />
    </DefaultLayout>
  );
};

export default Dishes;
