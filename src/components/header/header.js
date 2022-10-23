import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLoginUser } from "../../redux/actions/actionCreator";
import { authSelector } from "../../redux/reducers/selectors";

import './header.css';

const navigation = [
  { id: 1, title: 'Home', path: '/', hidden:false },
  { id: 2, title: 'Latest News', path: '/latest-news',hidden:true},
  { id: 3, title: 'Popular News', path: '/popular-news',hidden:true },
];

const Header = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector(authSelector)


  useEffect(() => {
    if(localStorage.getItem('auth') === 'true'){
      dispatch(setLoginUser(!auth))
    }
  },[])

  function toggleAuth(e){
    e.preventDefault();
    localStorage.setItem('auth',!auth)
    dispatch(setLoginUser(!auth))
  }
  
  function show(auth,hidden){
    return auth || !hidden
  }
  return(
  
  <header>
    <nav className="nav">
      <div className="links">
        {navigation.map(({ id, title, path, hidden }) => (
          show(auth,hidden)&&<NavLink key={id} to={path} exact={true}>{title}</NavLink>
        ))}
        <a onClick={(e) => {toggleAuth(e)}}>{auth?"Logout":"Login"}</a>
      </div>
    </nav>
  </header>
)};

export default Header;
