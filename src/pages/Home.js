import React from 'react';
import AboutMe from '../components/AboutMe';
import BarNav from '../components/BarNav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import './styles/Home.css';

const Home = () => {
    return (
        <>
            {/* <BarNav /> */}
            <main className="main-container">
                <Hero />
                <AboutMe />
            </main>
        </>
    )
}

export default Home;
