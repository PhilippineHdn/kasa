import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import KasasList from '../Components/KasasList';
import Footer from '../Components/Footer'

import landscape from '../assets/img/IMG.jpg';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner image={landscape} />
            <KasasList />
            <Footer />
        </div>
    );
};

export default Home;