import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'phosphor-react'
import { GameController } from 'phosphor-react'
import logo from '../../assets/home-imgs/infinitron-logo.png'
import { User} from 'phosphor-react'
import { ShoppingCart } from 'phosphor-react'
import { MagnifyingGlass } from 'phosphor-react'


import './navbar.css'


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }


    return (
        <nav className="navbar">
            <div className="container">
                <p className='home-title'>Infinitron</p>
                

                <div className="menu-icon" onClick={handleShowNavbar}>
                    <List size={40} color='white' />
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>

                    <ul>

                        <li>
                            <NavLink to="/">Start Build</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Best Sellers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Finance</NavLink>
                        </li>
                        <li>  <img className='home-logo' src={logo} alt="" />
</li>

                        <li>
                            <NavLink to="/contact">Support</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">About us</NavLink>
                        </li>
                        <li>
                            <NavLink className='search-icon' to="/contact"><MagnifyingGlass size={32} /></NavLink>
                        </li>
                        <li>
                            <NavLink  className='user-icon'to="/contact"><User size={32} /></NavLink>
                        </li>
                        <li>
                            <NavLink className='shopping-icon' to="/contact"><ShoppingCart size={32} /></NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar
