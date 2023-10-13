import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./Context/authcontext";
import { CartManagerComponent } from "./Components/Cart/CartContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartModal from "./Components/Cart/CartModal";
import MainComponent from "./Components/Layout/MainComponent";
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainComponent />,
      },
      {
        path: "/cart",
        element: <CartModal />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartManagerComponent>
        <RouterProvider router={router} />
      </CartManagerComponent>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
