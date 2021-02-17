import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'

import "./styles/Portfolio.css"

const Portfolio = () => {

    const [category, setCategory] = useState('allProjects')
    // const [state, setstate] = useState(initialState)

    return (
        <section className="portfolio-container">
            <div className="portfolio__navbar">
                <h3 className="portfolio__title">Portfolio</h3>
                <ul>
                    <li>ALL CATEGORIES</li>
                    <li>WEB</li>
                    <li>UI ELEMENTS</li>
                    <li>ANIMATIONS</li>
                    <li>UTILITIES</li>
                    <li>OTHERS</li>
                </ul>
            </div>
            <ProjectList 
                category={ category }
            />
            
        </section>
    )
}

export default Portfolio
