import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Dropdown from '../Components/Dropdown';
import Footer from '../Components/Footer';
import landscape from '../assets/img/landscape2.jpg';
import '../styles/components/About.css';

const About = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Header />
            <Banner image={landscape}/>
            <div className='about-expandable-windows'>
                <Dropdown dropdownTitle={t('aboutTitle1')} content={t('aboutText1')} />
                <Dropdown dropdownTitle={t('aboutTitle2')} content={t('aboutText2')} />
                <Dropdown dropdownTitle={t('aboutTitle3')} content={t('aboutText3')} />
                <Dropdown dropdownTitle={t('aboutTitle4')} content={t('aboutText4')} />
            </div>
            <Footer />
        </div>
    );
};

export default About;