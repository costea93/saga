import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userAuth } from "../../redux/actions/actionCreator";

import './header.css';

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Latest News', path: '/latest-news' },
    { id: 3, title: 'Popular News', path: '/popular-news' },
];

const Header = () => {
    const dispatch = useDispatch()
    const { isLogged } = useSelector(state => state.userAuth)

    const handleLogin = () => {
        if (!isLogged) {
            localStorage.setItem('isLogged', 'true')
            dispatch(userAuth(true))
        }
    }

    const handleLogout = () => {
        if (isLogged) {
            localStorage.setItem('isLogged', 'false')
            dispatch(userAuth(false))
        }
    }

    useEffect(() => {
        const isLogged = localStorage.getItem('isLogged')
        if (isLogged === 'true') {
            dispatch(userAuth(true))
        } else {
            dispatch(userAuth(false))
        }
    }, [])

    return (
        <header>
            <nav className="nav">
                <div className="links">
                    {!isLogged ?
                        <NavLink to='/'>Home</NavLink>
                        : navigation.map(({ id, title, path }) => (
                            <NavLink key={id} to={path}>{title}</NavLink>
                        ))}

                    {!isLogged ? <a href="#" onClick={handleLogin}>Login</a> :
                        <a href="#" onClick={handleLogout}>Logout</a>}
                </div>
            </nav>
        </header>
    )
};

export default Header;
