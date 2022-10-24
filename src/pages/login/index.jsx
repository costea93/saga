import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../../redux/actions/actionCreator";

const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const userLogged = localStorage.getItem('userLogged')
        if (userLogged !== null && userLogged !== 'false') {
            dispatch(setUserAuth(true))
            if (location.state) {
                history.push(location.state.from.location)
            } else {
                history.push('/')
            }
        } else {
            history.push('/')
        }
    }, [location])

    return null;
};

export default Login;