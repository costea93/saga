import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { USER_LOGING_STATE_LS } from "../../redux/constants";
import { setUserLoginState } from "../../redux/actions/actionCreator";

import "./header.css";

const navigation = [
  { id: 1, title: "Home", path: "/", visible: true },
  { id: 2, title: "Latest News", path: "/latest-news" },
  { id: 3, title: "Popular News", path: "/popular-news" },
];

const Header = () => {
  const [visibleNav, setVisibleNav] = useState(navigation);
  const history = useHistory();

  const dispatch = useDispatch();
  const userState = useSelector((store) => store.user.userLogin);

  useEffect(() => {
    if (userState) {
      const enhancedNavs = visibleNav.map((nav) => {
        return {
          ...nav,
          visible: true,
        };
      });
      setVisibleNav(enhancedNavs);
    } else {
      setVisibleNav(navigation);
      history.push("/");
    }
  }, [userState]);

  const handleLogin = () => {
    const nextUserState = !userState;
    dispatch(setUserLoginState(nextUserState));
    localStorage.setItem(USER_LOGING_STATE_LS, nextUserState);
  };

  return (
    <header>
      <nav className="nav">
        <div className="links">
          {visibleNav.map(
            ({ id, title, path, visible }) =>
              visible && (
                <NavLink key={id} to={path} exact={true}>
                  {title}
                </NavLink>
              )
          )}
          <button onClick={handleLogin}>
            {userState ? "Log out" : "Log in"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
