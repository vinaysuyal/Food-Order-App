import CartButton from "../Cart/CartButton";
import CartContext from "../Cart/CartContext";
import ReactDOM from "react-dom";
import CartModal from "../Cart/CartModal";
import { useContext } from "react";
import "./HeaderComponent.css";
import { AuthContext } from "../../Context/authcontext";

const HeaderComponent = (props) => {
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const logOutButtonHandler = () => {
    authContext.logOutHandler();
  };
  return (
    <header>
      <>
        <nav className="header-bar">
          <div className="left-nav">
            <h1>The Ultimate Momos</h1>
          </div>
          {authContext.isLoggedIn && (
            <div className="right-nav">
              <div>
                <CartButton
                  onClick={() => {
                    cartContext.cartVisibilityHandler(true);
                  }}
                />
              </div>
              <span id="signOutButton" onClick={logOutButtonHandler}>
                Sign Out
              </span>
            </div>
          )}
        </nav>
      </>
      {cartContext.isCartVisible &&
        ReactDOM.createPortal(
          <CartModal />,
          document.getElementById("CartPortal")
        )}
    </header>
  );
};
export default HeaderComponent;
