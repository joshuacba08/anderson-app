import React, { useEffect, useState } from 'react';
import Project from './Project';
import onDev from '../assets/images/onDev.png';
import { getAllProjects } from '../helpers/searchFunctions';

import './styles/ProjectList.css';

const ProjectList = ({ searchFunction, field, value }) => {

    const [items, setItems] = useState(null);

    useEffect(() => {
       
        value === 'allProjects' ? 
            getAllProjects().then(response => setItems(response)) :
            searchFunction(field, value).then(response => setItems(response));

    }, [ searchFunction, field,value ]);



    return (
        <>
            {
                items ?
                    
                    <div className="item-list-container">
                        {
                            items.map((project) => {

                                return <div className="item-list-container__item" key={project.id}>
                                    <Project 
                                        name = { project.data.name }
                                        description = { project.data.description }
                                        github = { project.data.github }
                                        image= { project.data.image }
                                        link = { project.data.link }
                                        technologies= { project.data.technologies }
                                    />
                                </div>
                            })
                        }
                    </div> 
                    :
                    <>
                        { items === 0 && 
                            <div className="portfolio__building-container">
                                <h2>I'm developing interesting projects. Hope you can see them later.</h2>
                                <div className="portfolio-image--building">
                                    <img src={onDev} alt="a man programing" />
                                </div>
                            </div> 
                        }
                        
                        { items !== 0 && 
                            <div className="loading-container">
                                <p className="loading">Loading projects...</p>
                            </div>
                        }
                    </>

            }
        </>
    )
}

export default ProjectList;
