import {useSelector} from "react-redux";
import {authSelector} from "../../redux/reducers/selectors";
import {Navigate, Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({children, ...rest}) => {
    const { auth } = useSelector(authSelector)

    return <Route {...rest} render={({location}) => auth
        ? (children)
        : <Redirect to={{pathname: '/preauth', state:{from: {location}}}} />}/>
};

export default ProtectedRoute;