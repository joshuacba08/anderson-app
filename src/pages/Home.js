import React from 'react';
import BarNav from '../components/BarNav';
import Hero from '../components/Hero';

import './styles/Home.css';

const Home = () => {
    return (
        <>
            <BarNav />
            <main className="main-container">
                <Hero value="Hola"/>
            </main>
        </>
    )
}

export default Home;
