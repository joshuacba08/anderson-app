import Typewriter from "typewriter-effect";

import './styles/Hero.css'

const Hero = () => {

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-container__mask">
                    <div className="content">
                        <p className="content__intro">Hi, my name is</p>
                        <h2 className="hero__title">Anderson Oroya.</h2>
                        <div className="hero__text">
                            <Typewriter
                                onInit={typewriter => {
                                    typewriter
                                        .typeString("I'm a Front-End Developer based in Cordoba, Argentina.")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("I build (and occasionally design) web interfaces.")
                                        .start();
                                }}
                            />
                        </div>
                        <div className="hero__button">
                            <a href="#about-me">CONOCEME</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero
