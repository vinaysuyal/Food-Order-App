import React, { useState } from "react";
import { useReducer } from "react";

const CartContext = React.createContext(
    {
        cartData: [],
        count: 0,
        dispatchCartData: () => {}
    }
);

export const CartManagerComponent = props => {
    const [cartState, dispatchCartData] = useReducer(updateCart, {
        cartData: [],
        count: 0,
        dispatchCartData: () => {}
    });

    const [isCartVisible, changeCartVisibility] = useState(false);

    const cartDataDispatchHandler = (action) => {
        dispatchCartData(action);
    }
    const cartVisibilityHandler = (newVisibility) => {
        changeCartVisibility(newVisibility
        );
    }
    console.log(isCartVisible);
    return <CartContext.Provider 
    value={{
        cartData: cartState.cartData,
        count: cartState.cartData.length,
        isCartVisible: isCartVisible,
        dispatchCartData: cartDataDispatchHandler,
        cartVisibilityHandler: cartVisibilityHandler,
    }}
    >
        {props.children}
    </CartContext.Provider>
}


const updateCart = (prevState, action) => {
    if(action.type === 'EditCart')
    {
        const matchingItemInCart = prevState.cartData.find((item) => action.newCartData.id === item.id);
        if(!matchingItemInCart)
        {
            if(action.reps == 0)    return prevState;
            const updatedCartData = [...prevState.cartData, action.newCartData]
            action.newCartData.reps = action.reps;
            return {
                cartData: [...updatedCartData],
                count : updatedCartData.length,
            };
        }
        const updatedCartData = prevState.cartData.filter((item) => {
            if(item.id === action.newCartData.id)
            {
                item.reps = action.reps;
            }
            if(item.reps == 0)
                return false
            return true;
        })
        return {
                cartData: [...updatedCartData],
                count : updatedCartData.length,
            };
    }
    return prevState;
}

export default CartContext;