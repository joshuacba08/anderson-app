import React from 'react'
import Typewriter from "typewriter-effect";
import building from '../assets/images/WebsiteBuilding.png';

import './styles/Blog.css';

const Blog = () => {
    return (
        <section className="blog-container">
            <div className="blog__title">
                <Typewriter
                    onInit={typewriter => {
                        typewriter
                            .typeString("I'm preparing this section with content that you will love!")
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString("¡Estoy preparando esta sección con un contenido que te encantará!")
                            .start();
                    }}
                />
            </div>
            <div className="blog-image--building">
                <img src={building} alt="" />
            </div>
        </section>
    )
}

export default Blog
