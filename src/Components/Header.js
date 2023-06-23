import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.jpg';
import '../styles/components/Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='header'>
            <NavLink to='/'>
                <img src={logo} alt="logo KASA" className='logo' />
            </NavLink>
            <ul className='navigation'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")} >
                    <li className='nav-option'>{t('homepage')}</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")} >
                    <li className='nav-option'>{t('about')}</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;