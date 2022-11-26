import Card from "../UI/Card";
import Meal from "./Meal";
import './MealList.css'
import useRequest from "../Hooks/use-request";
import { useCallback, useEffect, useState } from "react";


const MealList = props => {
  const [DUMMY_MEALS, setDummyMeals] = useState([]);
  const [isListLoading, requestEncounteredError ,fetchData] = useRequest();
  useEffect(
    () => {
      fetchData('meals', setDummyMeals);
    },
    [fetchData]
  );
  const getMealList = Object.keys(DUMMY_MEALS).map((id) => 
  <li key={id}>
    <Meal 
    mealData = {
      {
        ...DUMMY_MEALS[id], id
      }
    }
  />
  </li>);
    return(
        <Card className='mealList'>
          {requestEncounteredError && <p>Ooops.. Please check your internet Connection</p>}
        <ul>
            {getMealList}
        </ul>
    </Card>
    );
}

export default MealList;