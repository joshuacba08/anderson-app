import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getProjectBy } from '../helpers/searchFunctions';
import ProjectList from '../components/ProjectList'

import "./styles/Portfolio.css"

const Portfolio = () => {

    // let history = useHistory();
    
    // console.log(history.location.pathname);

    const [category, setCategory] = useState('allProjects')
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
                <h2 className="portfolio__title">Portfolio</h2>
                <ul>
                    <li 
                        onClick={()=>{handleClick(categories[0])}}
                    ><NavLink to="/portfolio/allProjects" activeClassName="selected" className="no-selected">{categories[0]}</NavLink></li>
                    <li 
                        onClick={() => { handleClick(categories[1]) }}
                    ><NavLink exact to="/portfolio/web" activeClassName="selected">{categories[1]}</NavLink></li>
                    <li 
                        onClick={()=>{handleClick(categories[2])}}
                    ><NavLink to="/portfolio/ui-elements" activeClassName="selected">{categories[2]}</NavLink></li>
                    <li
                        onClick={() => { handleClick(categories[3]) }}
                    ><NavLink to="/portfolio/animation" activeClassName="selected">{categories[3]}</NavLink></li>
                    <li
                        onClick={() => { handleClick(categories[4]) }}
                    ><NavLink exact to="/portfolio/utilities" activeClassName="selected">{categories[4]}</NavLink></li>
                    <li
                        onClick={() => { handleClick(categories[5]) }}
                    ><NavLink exact to="/portfolio/others" activeClassName="selected">{categories[5]}</NavLink></li>
                </ul>
            </div>
            <ProjectList 
                searchFunction={getProjectBy}
                field={'category'}
                value={category}
            />
            
        </section>
    )
}

export default Portfolio
