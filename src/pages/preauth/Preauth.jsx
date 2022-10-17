import {useEffect} from "react";
import {useHistory, useLocation} from "react-router";
import {useDispatch} from "react-redux";
import {SET_AUTH} from "../../redux/constants";
import {userLogin} from "../../redux/actions/actionCreator";

const Preauth = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const isLogged = localStorage.getItem('auth')
        if (isLogged !== 'false') {
            setTimeout(() => {
                dispatch(userLogin(true))
                if(location.state) {
                    history.push(location.state.from.location)
                } else {
                    history.push('/')
                }
            }, 1000)
        } else {
            setTimeout(() => {
                history.push('/401')
            }, 750)
        }
    }, [location])

    return (
        <div className="preauth">
            <span className="loader"></span>
        </div>
    );
};

export default Preauth;