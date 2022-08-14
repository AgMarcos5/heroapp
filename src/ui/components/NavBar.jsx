import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const activeLink = ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`
    
    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ activeLink }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ activeLink }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    
                    <NavLink 
                        className={ activeLink }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.username}
                    </span>
                    <button 
                        onClick={onLogout}
                        className='btn nav-item nav-link'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}