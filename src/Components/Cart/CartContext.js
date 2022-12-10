import React, { useEffect, useRef, useState, useContext } from "react";
import { useReducer } from "react";
import { AuthContext } from "../../Context/authcontext";
import useRequest from "../Hooks/use-request";

const CartContext = React.createContext({
  cartData: [],
  count: 0,
  dispatchCartData: () => {},
});

export const CartManagerComponent = (props) => {
  const {isLoggedIn} = useContext(AuthContext);
  const hasStarted = useRef(true);
  const [cartState, dispatchCartData] = useReducer(updateCart, {
    cartData: [],
    count: 0,
    dispatchCartData: () => {},
  });
  const [isListLoading, requestEncounteredError, fetchData] = useRequest();
  const setCartState = (data) => {
    console.log(data);
    const cartData = data ? data.cartData  : [];
    dispatchCartData({
        type:'SetCart',
        newCartData: cartData,
    });
  }
  useEffect(() => {
    if(!isLoggedIn)
        return;
    if(!hasStarted.current) {
        localStorage.setItem('cart',JSON.stringify(cartState));
      //Following code needs to be implemented if cart data is to be stored in database
        // const timeOut = setTimeout(async () => {
        //     await fetchData("cart", null, {
        //         method: "PUT",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(cartState),
        //       });
        // }, 500)
        // return () => {clearTimeout(timeOut)};
    }  
    else 
    hasStarted.current = false;
  }, [cartState]);

  useEffect(
    () => {
      if(!isLoggedIn)
        return;
      const localCartState = JSON.parse(localStorage.getItem('cart'));
      console.log(localCartState);
      setCartState(localCartState);
      hasStarted.current = true;
      //Following code needs to be implemented if cart data is to be stored in database
      //  const fetchAsync = async () => {
      //       await fetchData("cart", setCartState);
      //   }
      //   fetchAsync();
    } 
    ,[isLoggedIn])
  const [isCartVisible, changeCartVisibility] = useState(false);

  const cartDataDispatchHandler = (action) => {
    action.fetchData = fetchData;
    dispatchCartData(action);
  };
  const cartVisibilityHandler = (newVisibility) => {
    changeCartVisibility(newVisibility);
  };
  return (
    <CartContext.Provider
      value={{
        cartData: cartState.cartData,
        count: cartState.cartData.length,
        isCartVisible: isCartVisible,
        dispatchCartData: cartDataDispatchHandler,
        cartVisibilityHandler: cartVisibilityHandler,
        requestEncounteredError: requestEncounteredError,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

const updateCart = (prevState, action) => {
  if (action.type === "EditCart") {
    const matchingItemInCart = prevState.cartData.find(
      (item) => action.newCartData.id === item.id
    );
    if (!matchingItemInCart) {
      if (action.reps == 0) return prevState;
      const updatedCartData = [...prevState.cartData, action.newCartData];
      action.newCartData.reps = action.reps;
      return {
        cartData: [...updatedCartData],
        count: updatedCartData.length,
      };
    }
    const updatedCartData = prevState.cartData.filter((item) => {
      if (item.id === action.newCartData.id) {
        item.reps = action.reps;
      }
      if (item.reps == 0) return false;
      return true;
    });
    return {
      cartData: [...updatedCartData],
      count: updatedCartData.length,
    };
  }
  if (action.type === "SetCart")
  {
    return {
        cartData: [...action.newCartData],
        count: action.newCartData.length,
      };
  }
  return prevState;
};

export default CartContext;
