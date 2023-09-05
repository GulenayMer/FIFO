import DefaultLayout from '../../components/layout/DefaultLayout';
import DishesTable from '../private/DishesPage/DishesTable';
import DishForm2 from '../../components/forms/DishForm2';
import DishItem from '../../components/forms/DishItem';

const Dishes = () => {
  return (
    <DefaultLayout>
      <h1>Dishes</h1>
      <DishForm2 />
      <DishItem />
      <DishesTable />
    </DefaultLayout>
  );
};

export default Dishes;
