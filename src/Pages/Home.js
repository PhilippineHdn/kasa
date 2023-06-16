import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import KasasList from '../Components/KasasList';
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <KasasList />
            <Footer />
        </div>
    );
};

export default Home;