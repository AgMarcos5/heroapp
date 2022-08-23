import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import search from '../../../assets/img/search.png'
import avatar from '../../../assets/img/avatar.png'
import { AuthContext } from "../../../auth/context/AuthContext";

import './navbar.scss'


export const Navbar = () => {

  const activeLink = ({ isActive }) =>
    `${isActive ? "active" : ""}`;

  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav>
      <Link to="/" className="title">Hero App</Link>
      <div className="options">
        <NavLink className={activeLink} to="/search">
          <img src={search} alt="search"/>
        </NavLink>
        <div className="profile">
          <img src={avatar} className="avatar" alt="avatar"/>
          <div className="user">
            <span >
              {user?.username}
            </span>
            <button onClick={onLogout} >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
