import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setAuthentification } from "../../redux/actions/actionCreator";

import "./header.css";

const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Latest News", path: "/latest-news" },
    { id: 3, title: "Popular News", path: "/popular-news" },
];

const Header = () => {
    const { isLoggedIn } = useSelector((state) => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        let loggedState = localStorage.getItem("loggedState");
        if (loggedState === "true") dispatch(setAuthentification(true));
    }, [dispatch]);

    const loginHandler = () => {
        localStorage.setItem("loggedState", true);
        dispatch(setAuthentification(true));
    };

    const logoutHandler = () => {
        localStorage.setItem("loggedState", false);
        dispatch(setAuthentification(false));
    };

    return (
        <header>
            <nav className="nav">
                <div className="links">
                    {isLoggedIn ? (
                        navigation.map(({ id, title, path }) => (
                            <NavLink key={id} to={path} exact={true}>
                                {title}
                            </NavLink>
                        ))
                    ) : (
                        <NavLink to="/">Home</NavLink>
                    )}
                    {isLoggedIn ? (
                        <a href="#top" onClick={logoutHandler}>
                            Logout
                        </a>
                    ) : (
                        <a href="#top" onClick={loginHandler}>
                            Login
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
