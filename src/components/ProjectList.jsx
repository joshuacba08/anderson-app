import React, { useEffect, useState } from 'react';
import Project from './Project';
import { getAllProjects, getProjectByCategory } from '../helpers/searchFunctions';

import './styles/ProjectList.css';

const ProjectList = ({ category }) => {

    const [items, setItems] = useState(null);

    useEffect(() => {
       
        category === 'allProjects' ? 
            getAllProjects().then(response => setItems(response)) :
            getProjectByCategory(category).then(response => setItems(response));

    }, [ category ]);

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
                                        image= { project.data.image }
                                        tecnologies= { project.data.technologies }
                                    />
                                </div>
                            })
                        }
                    </div> :
                    <div className="loading-container">
                        <p className="loading">Cargando productos...</p>
                    </div>

            }
        </>
    )
}

export default ProjectList;
