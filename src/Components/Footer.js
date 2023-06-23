import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/LOGO.svg';
import '../styles/components/Footer.css';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='footer'>
            <img className='logo' src={logo} alt="Kasa logo" /> 
            <h3 className='credits'>{t('credits')}</h3>
        </div>
    );
};

export default Footer;