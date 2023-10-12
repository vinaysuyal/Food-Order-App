import Card from "../UI/Card";
import "./Meal.css";

function MealSkeleton({ count }) {
  let skeletonArray = [];
  for (let i = 0; i < count; i++) {
    skeletonArray.push(
      <Card key={i} className="meals-card">
        <div className="skeleton--mealDescription">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="skeleton--pricingAndCart">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
      </Card>
    );
  }
  return <>{skeletonArray}</>;
}

export default MealSkeleton;
