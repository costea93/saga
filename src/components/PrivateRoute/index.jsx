import { useSelector } from "react-redux";
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const { isLogged } = useSelector(state => state.userAuth)

    return <Route {...rest} render={({ location }) => isLogged
        ? (children)
        : <Redirect to={{ pathname: '/login', state: { from: { location } } }} />} />
};

export default PrivateRoute;