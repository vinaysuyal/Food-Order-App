import Card from "../UI/Card";
import Meal from "./Meal";
import './MealList.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Veg Steamed Momos',
      description: 'The original momos',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Paneer Steamed Momos',
      description: 'Momos with filling of paneer inside them',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Achaari Tandoor Momos',
      description: 'Veg steamed momos marinated with Flavors and baked in tandoor',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Afghani Momos',
      description: 'Veg Steamed momos, marinated and baked in tandoor, topped with cream',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Gravy Momos',
      description: 'Veg Steamed momos added to gravy containing noodles, rolls and soup',
      price: 18.99,
    },
    {
      id: 'm6',
      name: 'Cheese Spinach Corn Dumplings',
      description: 'Authentic dumplings with filling of Cheese, Spinach and Corn',
      price: 18.99,
    },
  ];

  const getMealList = DUMMY_MEALS.map((item) => 
  <li key={item.id}>
    <Meal 
    mealData = {item}
  />
  </li>);
const MealList = props => {
    return(
        <Card className='mealList'>
        <ul>
            {getMealList}
        </ul>
    </Card>
    );
}

export default MealList;