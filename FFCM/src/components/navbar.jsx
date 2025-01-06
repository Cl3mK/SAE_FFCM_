import React, { useState, useEffect } from 'react';
import '@css/Navbar.css';
import ffcmLogo from '@images/ffcm_logo.png';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

const NavItem = ({ to, children, onClick }) => {
    return (
        <li>
            <NavLink to={to} activeClassName="active" onClick={onClick}>
                {children}
            </NavLink>
        </li>
    );
};

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoginClicked, setIsLoginClicked] = useState(false);


    useEffect(() => {
        const paths = ['/', '/documents', '/actualites', '/annonceurs'];
        setActiveIndex(paths.indexOf(location.pathname));
        if (location.pathname !== '/login') {
            setIsLoginClicked(false);
        }
    }, [location]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLoginClick = () => {
        setIsLoginClicked(true);
    };
    

    return (
        <header className="navbar_container">
            <div className='navbar_header'>
                <FontAwesomeIcon icon={faBars} className="hamburger_icon" onClick={toggleMenu} />
                <Link to="/"><img className="navbar_logo" src={ffcmLogo} alt="FFCM Logo" /></Link>
            </div>

            <form className="search_box">
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input type="text" placeholder="Rechercher..." />
            </form>
            
            <button className="adherer_button" onClick={handleLoginClick}><Link to="/login">Se connecter</Link></button>
            
            <nav>
                <ul className={`nav_links ${isMenuOpen ? 'open' : ''}`}>
                    <NavItem to="/" onClick={closeMenu}>Accueil</NavItem>
                    <NavItem to="/documents" onClick={closeMenu}>Documents</NavItem>
                    <NavItem to="/actualites" onClick={closeMenu}>Actualités</NavItem>
                    <NavItem to="/annonceurs" onClick={closeMenu}>Annonceurs</NavItem>
                </ul>
                <div
                    className="active-bar"
                    style={{
                        left: `calc(${(2 + activeIndex * 2) * (100 / 11)}% + 10px)`,
                        width: `calc(${(2*100) / 11}% - 15px)`,
                        backgroundColor: isLoginClicked ? 'transparent' : '#333298',
                    }}
                ></div>
            </nav>
        </header>
    );
};

export default Navbar;
