import React from 'react';
import landscape from '../assets/img/IMG.jpg';
import '../styles/components/Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={landscape} className='banner-img' alt='landscape' />
            <div className='img-overlay'>
                <span className='text'>Chez vous,</span>
                <span className='text'>partout et ailleurs</span>
            </div>
        </div>
    );
};

export default Banner;