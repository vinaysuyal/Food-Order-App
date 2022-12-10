import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  authToken: "",
  isLoggedIn: false,
  loginHandler: () => {},
  logOutHandler: () => {},
});

let autoOutLogger = null;

const expiryTimeCalculator = (expiryTime) => {
  return new Date(new Date().getTime() + parseInt(expiryTime) * 1000);
};

const AuthContextProvider = (props) => {
  const [isLoggedIn, changeLoginStatus] = useState(false);
  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    const expiryTime = localStorage.getItem("expiry-time");
    if (authToken && expiryTime) {
      const expiryTimeLeft = new Date(expiryTime).getTime() - new Date().getTime();
      if(expiryTimeLeft <= 0)
      {
        logOutHandler();
      }
      else
      loginHandler(authToken, expiryTimeLeft/1000);
    }
    else logOutHandler();
  }, []);
  const loginHandler = (authToken, expiryTime) => {
    changeLoginStatus(true);
    setAuthToken(authToken);
    localStorage.setItem("auth-token", authToken);
    localStorage.setItem("expiry-time", expiryTimeCalculator(expiryTime));
    autoOutLogger = setTimeout(() => {
      logOutHandler();
      alert('logging out');
    }, parseInt(expiryTime) * 1000);
  };
  const logOutHandler = () => {
    changeLoginStatus(false);
    clearTimeout(autoOutLogger);
    localStorage.clear("auth-token");
    localStorage.clear("expiry-time");
  };
  return (
    <AuthContext.Provider
      value={{
        authToken: authToken,
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logOutHandler: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
