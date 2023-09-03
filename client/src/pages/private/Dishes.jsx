import DefaultLayout from '../../components/layout/DefaultLayout';
import DishesTable from '../private/DishesPage/DishesTable';
import DishForm from '../../components/forms/DishForm'

const Dishes = () => {
  return (
    <DefaultLayout>
      <h1>Dishes</h1>
	  <DishForm/>
     <DishesTable /> 
    </DefaultLayout>
  );
};

export default Dishes;
