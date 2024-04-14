import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { List } from 'phosphor-react';
import logo from '../../assets/home-imgs/infinitron-logo.png';
import { User, ShoppingCart, MagnifyingGlass,InstagramLogo } from 'phosphor-react';
import { Link } from "react-scroll";

import './navbar.css';

const Navbar = () => {
    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <p className='home-title'>Infinitron</p>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    <List size={40} color='white' />
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/start-build-page">Start Build</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/review-page">Reviews</NavLink>
                        </li>
                        <li className='bestsellers-temp'>
                            {location.pathname === "/" ? (
                                <Link to="bestsellers" spy smooth>
                                    Best Sellers
                                </Link>
                            ) : (
                                <NavLink to="/">
                                    Best Sellers
                                </NavLink>
                                
                                
                            )}
                        </li>
                        <li className='home-nav-temp'>
                            <NavLink onClick={handleShowNavbar} to="/">Home</NavLink>
                        </li>
                        <li className='home-logo-temp'>
                            <NavLink to='/'><img className='home-logo' src={logo} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/finance-page">Financing</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/about-page" >About us</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} className='search-icon' to="/contact-page"><MagnifyingGlass size={32} /></NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} className='user-icon' to="https://github.com/FranThe3rd" target='_blank'><InstagramLogo size={32} /></NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} className='shopping-icon' ><ShoppingCart size={32} /></NavLink>
                        </li>
    
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
