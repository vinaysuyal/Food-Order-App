import CartButton from "../Cart/CartButton";
import CartContext from "../Cart/CartContext";
import ReactDOM from "react-dom";
import CartModal from "../Cart/CartModal";
import { useContext, useMemo } from "react";
import "./HeaderComponent.css";
import { AuthContext } from "../../Context/authcontext";
import CartIcon from "../Cart/CartIcon";
import LogoutIcon from "../../Icons/LogOutIcon";
import { Link } from "react-router-dom";

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
            <h1>Momo Central</h1>
          </div>
          {authContext.isLoggedIn && (
            <div key={cartContext.count} className="right-nav">
              <Link to="cart">
                <div
                  onClick={() => {
                    cartContext.cartVisibilityHandler(true);
                  }}
                >
                  <CartIcon />
                  <span>Cart ({cartContext.count})</span>
                </div>
              </Link>
              <span id="signOutButton" onClick={logOutButtonHandler}>
                <LogoutIcon />
              </span>
            </div>
          )}
        </nav>
      </>
    </header>
  );
};
export default HeaderComponent;
