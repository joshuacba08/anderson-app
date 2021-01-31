import React, { useEffect, useState } from 'react'

import './styles/Hero.css'

const Hero = prop => {

    



    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-container__mask">
                    <h2 className="hero__title">Discover my Amazing Art Space!</h2>
                    <p className="hero__text">
                            <span>code</span> Desarrollo páginas web {prop.value}|<span>code</span>
                        </p>
                    <div className="hero__button">
                        <a href="/">CONOCEME</a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero
