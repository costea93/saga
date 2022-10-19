import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { setSignUpStatus } from "../../redux/actions/actionCreator";

const SignIn = function () {
  const [user] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const emailRef = useRef();
  const passRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const signInHandler = (e) => {
    e.preventDefault();

    let email = emailRef.current.value;
    let password = passRef.current.value;

    if (user.email === email && user.password === password) {
      dispatch(setSignUpStatus(true));
      history.push("/");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <form onSubmit={signInHandler}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Enter your email..."
          required
        />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          ref={passRef}
          type="password"
          id="pass"
          placeholder="Enter your password..."
          required
        />
      </div>
      <button type="submit">Sign In</button>
      <p>
        If you are not registered, please{" "}
        <NavLink to="register">Register</NavLink>
      </p>
    </form>
  );
};

export default SignIn;
