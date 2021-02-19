import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProjectList from '../components/ProjectList'

import "./styles/Portfolio.css"

const Portfolio = () => {


    const [active, setActive] = useState('');
    const [category, setCategory] = useState('allProjects')
    // const [state, setstate] = useState(initialState)
    const categories = ['all categories','web','ui elements','animation','utilities','others']

    const handleClick = (category) => {
        switch (category) {
            case 'all categories':
                setCategory('allProjects');
                break;
            case 'web':
                setCategory('web');
                break;
            case 'ui elements':
                setCategory('uiElements')
                break;
            case 'animation':
                setCategory('animation')
                break;
            case 'utilities':
                setCategory('utilities')
                break;
            case 'others':
                setCategory('others')
                break;

            default:
                break;
        }
    }
    return (
        <section className="portfolio-container">
            <div className="portfolio__navbar">
                <h3 className="portfolio__title">Portfolio</h3>
                <ul>
                    <li 
                        className={active}
                        onClick={()=>{handleClick(categories[0])}}
                    ><NavLink to="/portfolio/allProjects" activeClassName="selected" className="no-selected">{categories[0]}</NavLink></li>
                    <li 
                        className={active}
                        onClick={() => { handleClick(categories[1]) }}
                    ><NavLink exact to="/portfolio/web" activeClassName="selected">{categories[1]}</NavLink></li>
                    <li 
                        className={active}
                        onClick={()=>{handleClick(categories[2])}}
                    ><NavLink to="/portfolio/ui-elements" activeClassName="selected">{categories[2]}</NavLink></li>
                    <li
                        className={active}
                        onClick={() => { handleClick(categories[3]) }}
                    ><NavLink to="/portfolio/animation" activeClassName="selected">{categories[3]}</NavLink></li>
                    <li
                    ><NavLink exact to="/portfolio/utilities" activeClassName="selected">{categories[4]}</NavLink></li>
                    <li
                    ><NavLink exact to="/portfolio/others" activeClassName="selected">{categories[5]}</NavLink></li>
                </ul>
            </div>
            <ProjectList 
                category={ category }
            />
            
        </section>
    )
}

export default Portfolio
