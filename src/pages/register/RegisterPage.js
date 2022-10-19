import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { setRegisteredUser } from "../../redux/actions/actionCreator";

const RegisterPage = function () {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passRef.current.value;

    const data = {
      name,
      email,
      password,
    };

    dispatch(setRegisteredUser(data));
    history.push("/login");
  };

  return (
    <form onSubmit={registerHandler}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Enter your name..."
          required
        />
      </div>
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
      <button type="submit">Register</button>
      <p>
        If you are already registered go to{" "}
        <NavLink to="login">Sign In</NavLink>
      </p>
    </form>
  );
};

export default RegisterPage;
