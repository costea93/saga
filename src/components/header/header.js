import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSignUpStatus } from "../../redux/actions/actionCreator";
import { useHistory } from "react-router-dom";

import "./header.css";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Latest News", path: "/latest-news" },
  { id: 3, title: "Popular News", path: "/popular-news" },
];

const Header = () => {
  const isSigned = useSelector((state) => state.login.isSigned);

  const [signedStatus, setSignedStatus] = useState(() => {
    return JSON.parse(localStorage.getItem("isSigned"));
  });

  useEffect(() => {
    setSignedStatus(JSON.parse(localStorage.getItem("isSigned")));
  }, [isSigned]);

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(setSignUpStatus(false));
    history.push("/login");
  };

  return (
    <header>
      <nav className="nav">
        <div className="links">
          {signedStatus && (
            <>
              <button onClick={logoutHandler}>Logout</button>
              {navigation.map(({ id, title, path }) => (
                <NavLink key={id} to={path} exact={true}>
                  {title}
                </NavLink>
              ))}
            </>
          )}
          {!signedStatus && <p>Register and Login to view content</p>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
