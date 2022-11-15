import CartButton from "../Cart/CartButton";
import CartContext from "../Cart/CartContext";
import ReactDOM from 'react-dom';
import CartModal from "../Cart/CartModal";
import { useContext } from "react";
import './HeaderComponent.css';

const HeaderComponent = props => {
    const cartContext = useContext(CartContext);
    return (
        <header>
            <div className="header-bar">
            <h1>
            The Ultimate Momos
            </h1>
            <CartButton onClick={() => {cartContext.cartVisibilityHandler(true)}}/>
            </div>
            {cartContext.isCartVisible && ReactDOM.createPortal(<CartModal/>, document.getElementById('CartPortal'))}
        </header>
    );
}
export default HeaderComponent;