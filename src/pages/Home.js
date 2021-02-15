import React from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';

import './styles/Home.css';

const Home = () => {
    return (
        <>
            <div className="home-main-container">
                <Hero />
                <AboutMe />
            </div>
        </>
    )
}

export default Home;
