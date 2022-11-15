import { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import CartIcon from "./CartIcon";
const CartButton = props => {
    const cartContext = useContext(CartContext);
    return (
        <button
        onClick={props.onClick}>
            <span>
                <CartIcon/>
            </span>
            <span>My Cart </span>
            <span>{cartContext.count}</span>
        </button>
    );
}

export default CartButton;