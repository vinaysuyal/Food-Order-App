import { useContext } from "react";
import Card from "../UI/Card";
import AddRemoveForm from "./AddRemoveForm";
import CartContext from "../Cart/CartContext";
import './Meal.css';

const Meal = props => {
    const cartContext = useContext(CartContext);
    const onAddCartItem = (reps) => {
        cartContext.dispatchCartData({type: 'EditCart',
                            newCartData: props.mealData,
                            reps});
    }
    const matchItem = cartContext.cartData.find((item) => item.id === props.mealData.id);
    return (
        <Card className='meals-card'>
            <div className="mealDescription">
            <h3>{props.mealData.name}</h3>
            <h5>{props.mealData.description}</h5>
            </div>
            <div className="pricingAndCart">
            <h3>₹ {props.mealData.price}</h3>
            {props.isConfirmedOrder && <span>{props.value}</span>}
            {!props.isConfirmedOrder && <AddRemoveForm onChange={onAddCartItem} value = {matchItem ? matchItem.reps : 0}/>}
            </div>
        </Card>
    );
}

export default Meal;