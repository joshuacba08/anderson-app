import Typewriter from "typewriter-effect";

import './styles/Hero.css'

const Hero = prop => {





    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-container__mask">
                    <h2 className="hero__title">Discover my Amazing Art Space!</h2>
                        <p className="hero__text"> 
                            <Typewriter 
                                onInit={typewriter => {
                                    typewriter
                                        .typeString("Hello World!")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString(" Desarrollo páginas web para impulsar el crecimiento de tu negocio. ")
                                        .start();
                                }}
                            />
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
