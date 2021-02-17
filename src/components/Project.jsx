import React from 'react'

import './styles/Project.css'

const Project = ({ name, description, image, technologies, }) => {
    return (
        <div className="project-container">
            <div className="image-container">
                <img src={image} alt=""/>
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Project
