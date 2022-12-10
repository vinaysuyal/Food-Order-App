import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authcontext";
import SignIn from "./SignIn";
import "./signInUp.css";
import SignInUpToggler from "./SignInUpToggler";
import SignUpForm from "./SingUp";

const SignInSignUp = () => {
  const [currentAuthPage, setCurrentAuthPage] = useState("SignIn");
  const formChangeHandler = (newAuthPage) => {
    if(newAuthPage === 'SignIn' || newAuthPage === 'SignUp')
    {
        setCurrentAuthPage(newAuthPage);
    }
    //else dispatch snackbar
  }
  return (
    <div >
      <SignInUpToggler value = {currentAuthPage} changeHandler = {formChangeHandler} />
      {currentAuthPage === "SignIn" && <SignIn />}
      {currentAuthPage === "SignUp" && <SignUpForm />}
    </div>
  );
};

export default SignInSignUp;
