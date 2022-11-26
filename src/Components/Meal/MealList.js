import Card from "../UI/Card";
import Meal from "./Meal";
import "./MealList.css";
import useRequest from "../Hooks/use-request";
import { useCallback, useEffect, useState } from "react";
import momosGIF from "../assets/momos.gif";
import ReactDOM from 'react-dom';

const MealList = (props) => {
  const [DUMMY_MEALS, setDummyMeals] = useState([]);
  const [isListLoading, requestEncounteredError, fetchData] = useRequest();
  useEffect(() => {
    fetchData("meals", setDummyMeals);
  }, [fetchData]);
  const getMealList = Object.keys(DUMMY_MEALS).map((id) => (
    <li key={id}>
      <Meal
        mealData={{
          ...DUMMY_MEALS[id],
          id,
        }}
      />
    </li>
  ));
  return (
    <>
      {isListLoading &&
        ReactDOM.createPortal(
          <>
            <div className="clickBlocker2"></div>
            <img className="momo-gif" style={{ width: "30vw" }} src={momosGIF} />
          </>,
          document.getElementById("CartPortal")
        )}
      <Card className="mealList">
        {requestEncounteredError && (
          <p>Ooops.. Please check your internet Connection</p>
        )}
        {!isListLoading && <ul>{getMealList}</ul>}
      </Card>
    </>
  );
};

export default MealList;
