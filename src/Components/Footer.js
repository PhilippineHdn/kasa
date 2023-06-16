import React from 'react';
import logo from '../assets/img/LOGO.svg';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img className='logo' src={logo} alt="Kasa logo" /> 
            <h3 className='credits'>© 2020 Kasa. All rights reserved</h3>
        </div>
    );
};

export default Footer;