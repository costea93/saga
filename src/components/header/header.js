import {NavLink} from "react-router-dom";
import './header.css';
import {useDispatch, useSelector} from "react-redux";
import {SET_AUTH, USER_LOGIN} from "../../redux/constants";
import {authSelector} from "../../redux/reducers/selectors";
import {useEffect} from "react";
import {useLocation} from "react-router";
import {setAuth, userLogin} from "../../redux/actions/actionCreator";

const navigation = [
    {id: 1, title: 'Home', path: '/', auth: false},
    {id: 2, title: 'Latest News', path: '/latest-news', auth: true},
    {id: 3, title: 'Popular News', path: '/popular-news', auth: true},
];

const Header = () => {
    const dispatch = useDispatch()
    const {auth} = useSelector(authSelector)

    const handleAuth = (e) => {
        e.preventDefault()
        if (auth){
            localStorage.setItem('auth', 'false')
            dispatch(userLogin(false))
        }
        else {
            localStorage.setItem('auth', 'true')
            dispatch(userLogin(true))
        }
    }

    useEffect(() => {
        const isLogged = localStorage.getItem('auth')
        if (isLogged === 'true'){
            dispatch(userLogin(true))
        } else {
            dispatch(userLogin(false))
        }
    }, [])

    return (
        <header>
            <nav className="nav">
                <div className="links">
                    {!auth ? navigation.filter(item => !item.auth).map(({id, title, path, auth}) => (
                        <NavLink key={id} to={path} exact={path}>{title}</NavLink>
                    )) : navigation.map(({id, title, path, auth}) => (
                        <NavLink key={id} to={path} exact={true}>{title}</NavLink>
                    ))}
                    {!auth ? <a href="#" onClick={e => handleAuth(e)}>Login</a> :
                        <a href="#" onClick={e => handleAuth(e)}>Logout</a>}
                </div>
            </nav>
        </header>
    )
};

export default Header;
