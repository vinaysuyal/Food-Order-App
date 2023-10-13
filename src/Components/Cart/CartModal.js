import { useContext } from "react";
import Meal from "../Meal/Meal";
import Card from "../UI/Card";
import CartContext from "./CartContext";
import "./CartModal.css";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
  const navigate = useNavigate();
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
        <svg
          className="cart-close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          onClick={() => {
            cartContext.cartVisibilityHandler(false);
            navigate("/");
          }}
        >
          <path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z"></path>
        </svg>
        <h1> My Cart </h1>
        {cartData.length > 0 && (
          <>
            <Card className="orderList">
              <ul> {getItemList()}</ul>
              <div className="checkoutPrompter">
                <h2>Total: ₹ {totalCharge.toFixed(2)}</h2>
                <button onClick={orderHandler} style={{ fontWeight: "bold" }}>
                  Feed me Momos
                </button>
              </div>
            </Card>
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
