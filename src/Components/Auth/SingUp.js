import { useContext, useRef } from "react";
import { AuthContext } from "../../Context/authcontext";

const SignUpForm = () => {
  const email = useRef();
  const password = useRef();
  const password2 = useRef();
  const { loginHandler } = useContext(AuthContext);
  const signUpSubmitFormHandler = async (event) => {
    event.preventDefault();
    if (password.current.value != password2.current.value) {
      alert("Passwords do not match.");
      return;
    }
    const data = {
      email: email.current.value,
      password: password.current.value,
      returnSecureToken: true,
    };
    try {
      const requestResponse = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALAusbyxHSEjg1xNJfGIe5lzuCWSjkYpo`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const response = await requestResponse.json();
      if (requestResponse.ok)
        loginHandler(response.idToken, response.expiresIn);
      else alert(response.error.message);
    } catch (error) {
      alert("Something went wrong. Please check your Internet Connection");
    }
  };
  return (
    <>
      <form
        onSubmit={signUpSubmitFormHandler}
        style={{ border: "1px solid #ccc" }}
      >
        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            ref={email}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            ref={password2}
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <div className="clearfix">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
