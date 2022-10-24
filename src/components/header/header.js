import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../redux/actions/actionCreator";

import './header.css';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Latest News', path: '/latest-news' },
  { id: 3, title: 'Popular News', path: '/popular-news' },
];

const Header = () => {
  const dispatch = useDispatch()
  const { userLogged } = useSelector(state => state.setUserAuth)

  const handleLogin = () => {
    if (!userLogged) {
      localStorage.setItem('userLogged', 'true')
      dispatch(setUserAuth(true))
    }
  }

  const handleLogout = () => {
    if (userLogged) {
      localStorage.setItem('userLogged', 'false')
      dispatch(setUserAuth(false))
    }
  }

  useEffect(() => {
    const userLogged = localStorage.getItem('userLogged')
    if (userLogged === 'true') {
      dispatch(setUserAuth(true))
    } else {
      dispatch(setUserAuth(false))
    }
  }, [])

  return (
    <header>
      <nav className="nav">
        <div className="links">
          {!userLogged ?
            <NavLink to='/'>Home</NavLink>
            : navigation.map(({ id, title, path }) => (
              <NavLink key={id} to={path}>{title}</NavLink>
            ))}

          {!userLogged ? <a href="#" onClick={handleLogin}>Login</a> :
            <a href="#" onClick={handleLogout}>Logout</a>}
        </div>
      </nav>
    </header>
  )
};

export default Header;
