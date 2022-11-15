import { CartManagerComponent } from "./Components/Cart/CartContext";
import HeaderComponent from "./Components/Layout/HeaderComponent";
import MainComponent from "./Components/Layout/MainComponent";

function App() {
  return ( 
    <CartManagerComponent>
          <HeaderComponent/>
          <MainComponent/>
      </CartManagerComponent>

  );
}

export default App;
