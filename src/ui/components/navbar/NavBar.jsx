import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import search from '../../../assets/img/search.png'
import avatar from '../../../assets/img/avatar.png'
import { AuthContext } from "../../../auth/context/AuthContext";

import './navbar.scss'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../../store/auth/thunks";


export const Navbar = () => {

  const activeLink = ({ isActive }) =>
    `${isActive ? "active btn" : "btn"}`;

  const [show,setShow] = useState(false)

  const navigate = useNavigate();

  const {displayName} = useSelector((state) => state.auth);
  const { user, logout } = useContext(AuthContext);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout())
  };

  
  const ref = useRef()
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [show])

  return (
    <>
    <nav>
      <Link to="/" className="title">Hero App</Link>
      <div className="options">
        <NavLink className={activeLink} to="/search">
          <img src={search} alt="search" />
        </NavLink>
        <div className="profile btn" ref={ref}>
          <img src={avatar} className="avatar" onClick={() => setShow(!show)}alt="avatar"/>
          <div className={`user ${show ? "show" : ""}`}>
            <span >
              {displayName}
            </span>
            <button onClick={onLogout} >
              Logout
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"/></g></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div className="hr"></div>
    </>
    
  );
};
