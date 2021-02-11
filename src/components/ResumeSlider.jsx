import React, { useState } from 'react'

import avatar from '../assets/images/Josue_Oroya.png';
import './styles/ResumeSlider.css'

const ResumeSlider = () => {
    
    /*Renderizado condicional*/
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        show ? <i className="icon--option background-image pointer" onClick={handleClick}>
                    </i>:
                <>
                    <i className="icon--option background-image pointer" onClick={handleClick}></i>  
        <section className="info-slider info-slider--activo">
            <article className="info-slider__header">
                <div className="nav-bar">
                    <i className="icon--option background-image pointer" onClick={handleClick}>
                    </i>
                </div>
                <figure className="avatar">
                    <img src={avatar} alt=""/>
                </figure>
                <div className="pulseAnim"></div>
                <h1>Josué Oroya</h1>
                <p>Front End Developer Jr.</p>
            </article>
            <article className="info-slide__data">
                <ul>
                    <li>
                        <h6>Residence:</h6>
                        <span>Argentina</span>
                    </li>
                    <li>
                        <h6>City:</h6>
                        <span>Córdoba</span>
                    </li>
                    <li>
                        <h6>Age:</h6>
                        <span>30</span>
                    </li>
                </ul>
            </article>
            <article className="info-slide__language">
                <div className="language-box">
                    <div className="circle1 language-ingles">
                        <div className="circle2 language-ingles">
                            <div className="circulo-tapa">
                                <span className="circulo-tapa__porcentaje">50%</span>
                            </div>
                        </div>
                    </div>
                    <span className="language">ENGLISH</span>
                </div>
                <div className="language-box">
                    <div className="circle1 language-japones--derecha">
                        <div className="circle2 language-japones--izquierda">
                            <div className="circulo-tapa">
                                <span className="circulo-tapa__porcentaje">65%</span>
                            </div>
                        </div>
                    </div>
                    <span className="language">JAPANESE</span>
                </div>
                <div className="language-box">
                    <div className="circle1 language-spanish--derecha">
                        <div className="circle2 language-spanish--izquierda">
                            <div className="circulo-tapa">
                                <span className="circulo-tapa__porcentaje">100%</span>
                            </div>
                        </div>
                    </div>
                    <span className="language">SPANISH</span>
                </div>
            </article>
            <article className="info-slide__skill">
                <div className="skill-container">
                    <div className="skill-container__detail">
                        <span>HTML</span>
                        <span>100%</span>
                    </div>
                    <div className="progresive-bar">
                        <div className="progresive-bar__porcent bar--html"></div>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="skill-container__detail">
                        <span>CSS</span>
                        <span>97%</span>
                    </div>
                    <div className="progresive-bar">
                        <div className="progresive-bar__porcent bar--css"></div>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="skill-container__detail">
                        <span>JS</span>
                        <span>93%</span>
                    </div>
                    <div className="progresive-bar">
                        <div className="progresive-bar__porcent bar--js"></div>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="skill-container__detail">
                        <span>React JS</span>
                        <span>85%</span>
                    </div>
                    <div className="progresive-bar">
                        <div className="progresive-bar__porcent bar--reactJS"></div>
                    </div>
                </div>
            </article>
        </section>
    </>
    )
}

export default ResumeSlider
