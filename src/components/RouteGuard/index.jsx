import { Redirect, Route } from 'react-router-dom'
import { useSelector } from "react-redux";

const RouteGuard = ({ children, ...rest }) => {
    const { userLogged } = useSelector(state => state.setUserAuth)

    return <Route {...rest} render={({ location }) => userLogged
        ? (children)
        : <Redirect to={{ pathname: '/login', state: { from: { location } } }} />} />
};

export default RouteGuard;