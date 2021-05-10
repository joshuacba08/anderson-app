import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import { getProjectBy } from '../helpers/searchFunctions';

import './styles/Home.css';

const Home = () => {
    return (
        <>
            <div className="home-main-container">
                <Hero />
                <AboutMe />
                <div className="featured-projects">
                    <h2>Featured projects</h2>
                    <ProjectList
                        searchFunction={getProjectBy}
                        field={'outstanding'}
                        value={true}
                    />
                    <Link exact to='/portfolio/allProjects'>
                        <span className="go-to-portfolio">See all my projects</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;
