import React from 'react';
import { NavLink } from "react-router-dom"
import logo from '../assets/img/logo.jpg';
import '../styles/components/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo KASA" className='logo' />
            <ul className='navigation'>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <li className='nav-option'>Accueil</li>
                </NavLink>
                <li className='nav-option'>A propos</li>
                {/* TODO: add a navlink and create a specific router file */}
            </ul>
        </div>
    );
};

export default Header;