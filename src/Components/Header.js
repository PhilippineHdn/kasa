import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.jpg';
import '../styles/components/Header.css';
import { changeLanguage } from 'i18next';

const Header = () => {

    const { t, i18n } = useTranslation();
    const getLanguage = i18n.language;
    const changeLanguageHandler = (choosedLanguage) => { i18n.changeLanguage(choosedLanguage) }

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
                <div className="switch-lang"> 
                    <div className="current-lang">
                        <img className="lang-flag" 
                        alt="language-flag" 
                        src={getLanguage === "en" ? "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png" : "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_France.png"} 
                        onClick={() => changeLanguageHandler(getLanguage === "en" ? "fr" : "en")}/>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Header;