import { useContext } from "react";
import Meal from "../Meal/Meal";
import Card from "../UI/Card";
import CartContext from "./CartContext";
import "./CartModal.css";
import crossIcon from "../assets/cross.png";

const CartModal = () => {
  const cartContext = useContext(CartContext);
  const cartData = cartContext.cartData;
  let totalCharge = 0;
  const orderHandler = (event) => {
    alert("This is a Demo Project. Ordering not supported");
  };
  const getItemList = () => {
    return cartData.map((item) => {
      totalCharge += item.price * item.reps;
      return <Meal key={item.id} mealData={item} />;
    });
  };
  return (
    <>
      <div className="clickBlocker"></div>
      <Card className="cartModal">
        <img
          className="cart-close"
          onClick={() => {
            cartContext.cartVisibilityHandler(false);
          }}
          src={crossIcon}
        ></img>
        <h1> My Cart </h1>
        {cartData.length > 0 && (
          <>
            <ul> {getItemList()}</ul>
            <div className="checkoutPrompter">
              <h2>Total: ₹ {totalCharge.toFixed(2)}</h2>
              <button onClick={orderHandler} style={{ fontWeight: "bold" }}>
                Feed me Momos
              </button>
            </div>
          </>
        )}
        {cartData.length === 0 && (
          <div style={{ textAlign: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="240"
              height="240"
            >
              <path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z"></path>
            </svg>
            <h2>Your Cart is Empty.</h2>
          </div>
        )}
      </Card>
    </>
  );
};

export default CartModal;
