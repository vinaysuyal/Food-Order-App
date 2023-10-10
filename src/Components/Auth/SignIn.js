import { useContext, useRef } from "react";
import { AuthContext } from "../../Context/authcontext";

const SignIn = (props) => {
  const { loginHandler } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const signInHandler = async (event) => {
    event.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
      returnSecureToken: true,
    };
    try {
      const requestResponse = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALAusbyxHSEjg1xNJfGIe5lzuCWSjkYpo`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      console.log(requestResponse);
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
        onSubmit={signInHandler}
        style={{ border: "1px solid #ccc" }}
        method="post"
      >
        <div className="container">
          <label htmlFor="uname">
            <b>E-mail</b>
          </label>
          <input
            ref={email}
            type="email"
            placeholder="Enter Your Email"
            name="uname"
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

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
export default SignIn;
