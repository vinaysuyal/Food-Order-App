import { useContext } from "react"
import Meal from "../Meal/Meal";
import Card from "../UI/Card";
import CartContext from "./CartContext"
import './CartModal.css';
import crossIcon from '../assets/cross.png';

const CartModal = () => {
    const cartContext = useContext(CartContext);
    const cartData = cartContext.cartData;
    let totalCharge = 0;
    const getItemList = () => {
        return cartData.map((item) =>
        {
            totalCharge += item.price * item.reps;
            return <li key={item.id}>
                <Meal mealData={item} />           
                </li>
        }
        )
    } 
    return (
    <>
    <div className="clickBlocker">
    </div>
    <Card className='cartModal'>
            <h1> My Cart </h1>
            <ul>
            {getItemList()}
        </ul>
        <img className="cart-close" onClick={() => {cartContext.cartVisibilityHandler(false)}} src={crossIcon}></img>
        <h2>Total: {totalCharge}</h2>
        </Card>  
    </>
             
    )
}

export default CartModal;