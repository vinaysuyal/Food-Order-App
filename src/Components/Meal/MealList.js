import { useEffect, useState } from "react";
import useRequest from "../Hooks/use-request";
import Card from "../UI/Card";
import Meal from "./Meal";
import "./MealList.css";
import MealSkeleton from "./MealSkeleton";

const MealList = (props) => {
  const [DUMMY_MEALS, setDummyMeals] = useState([]);
  const [isListLoading, requestEncounteredError, fetchData] = useRequest();
  useEffect(() => {
    fetchData("meals", setDummyMeals);
  }, [fetchData]);
  const getMealList = Object.keys(DUMMY_MEALS).map((id) => (
    <Meal
      key={id}
      mealData={{
        ...DUMMY_MEALS[id],
        id,
      }}
    />
  ));
  return (
    <>
      <Card className="mealList">
        {requestEncounteredError && (
          <p>Ooops.. Please check your internet Connection</p>
        )}
        {isListLoading && (
          <ul>
            <MealSkeleton count={4} />
          </ul>
        )}
        {!isListLoading && <ul>{getMealList}</ul>}
      </Card>
    </>
  );
};

export default MealList;
