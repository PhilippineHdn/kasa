import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../styles/components/Error.css'

const Error = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Header />
            <div className='error-block'>
                <h1 className='error-number'>404</h1>
                <h2 className='error'>{t('error')}</h2>
                <a className='link-to-home' href='./'>{t('backHome')}</a>
            </div>
            <Footer />
        </div>
    );
};

export default Error;