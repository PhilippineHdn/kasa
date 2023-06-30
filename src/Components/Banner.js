import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/components/Banner.css';

const Banner = (props) => {
    const { t } = useTranslation();
    const location = useLocation();
    const image = props.image;
    return (
        <div className={ location.pathname === '/about' ? 'banner banner-about-page' : 'banner banner-home-page'}>
            <img src={image} className='banner-img' alt='landscape' />
            <div className={ location.pathname === '/about' ? '' : 'img-overlay'}>
                <span className='text'>{t('bannerTitleLeft')}</span>
                <span className='text'>{t('bannerTitleRight')}</span>
            </div>
        </div>
    );
};

export default Banner;