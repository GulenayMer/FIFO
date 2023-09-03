import DefaultLayout from '../../components/layout/DefaultLayout';
import DishesTable from '../private/DishesPage/DishesTable';
import DishForm from '../../components/forms/DishForm'
import DishItem from '../../components/forms/DishItem'

const Dishes = () => {
  return (
    <DefaultLayout>
      <h1>Dishes</h1>
	  <DishForm/>
	  <DishItem/>
     <DishesTable /> 
    </DefaultLayout>
  );
};

export default Dishes;
