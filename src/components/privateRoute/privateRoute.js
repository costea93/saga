import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelector } from "../../redux/reducers/selectors";

const PrivateRoute = ({children, ...rest}) => {
    let {auth} = useSelector(authSelector)
    return(
        <Route {...rest}>
                {!auth 
                    ?
                    <Redirect to="/401" /> 
                    : 
                    children}
        </Route>
    )
}

export default PrivateRoute