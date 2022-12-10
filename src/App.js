import logo from "./logo.svg";
import "./App.css";
import SignInSignUp from "./Components/Auth/SignInSignUp";
import AuthContextProvider, { AuthContext } from "./Context/authcontext";
import { useContext } from "react";
import HeaderComponent from "./Components/Layout/HeaderComponent";
import MainComponent from "./Components/Layout/MainComponent";
import { CartManagerComponent } from "./Components/Cart/CartContext";
function App() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <HeaderComponent />
      {!authContext.isLoggedIn && <SignInSignUp />}
      {authContext.isLoggedIn && (
        <>
          <CartManagerComponent>
            <MainComponent />
          </CartManagerComponent>
        </>
      )}
    </>
  );
}

export default App;
