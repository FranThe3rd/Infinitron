import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List } from 'phosphor-react';
import logo from '../../assets/home-imgs/infinitron-logo.png';
import { User, ShoppingCart, MagnifyingGlass } from 'phosphor-react';
import { Link } from "react-scroll";

import './navbar.css';

const Navbar = () => {
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
                            <NavLink to="/build-page">Start Build</NavLink>
                        </li>
                        <li>
                            <NavLink to="/review-page">Reviews</NavLink>
                        </li>
                        <li>
                            <Link to="bestsellers"  spy={true} smooth={true} duration={1000} style={{ cursor: "pointer", color: 'white' }}>Best Sellers</Link>
                        </li>
                        <li>
                            <NavLink  to='/'><img className='home-logo' src={logo} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-page">Financing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-page" >About us</NavLink>
                        </li>
                        <li>
                            <NavLink   className='search-icon' to="/contact"><MagnifyingGlass size={32} /></NavLink>
                        </li>
                        <li>
                            <NavLink className='user-icon' to="/contact"><User size={32} /></NavLink>
                        </li>
                        <li>
                            <NavLink  className='shopping-icon' to="/contact"><ShoppingCart size={32} /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
