import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = (props) => {
    const logged = useSelector((state) => state.login.isLoggedIn);
    const { children, ...args } = props;

    return logged ? <Route {...args}>{children} </Route> : <Redirect to="/" />;
};

export default AuthRoute;
