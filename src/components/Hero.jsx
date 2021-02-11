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
                        <p className="hero__text">
                            <Typewriter
                                onInit={typewriter => {
                                    typewriter
                                        .typeString("I'm Front-End Developer")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString(" Desarrollo páginas web para impulsar el crecimiento de tu negocio.")
                                        .start();
                                }}
                            />
                        </p>
                        <div className="hero__button">
                            <a href="/">CONOCEME</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero
