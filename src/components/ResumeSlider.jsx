import React, { useState } from 'react'

import avatar from '../assets/images/Josue_Oroya.png';
import './styles/ResumeSlider.css'

const ResumeSlider = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        show ? <i className="icon--option background-image pointer" onClick={handleClick}>
                    </i>:  
        <section className="info-slider info-slider--activo">
            <article className="info-slider__header">
                <div className="nav-bar">
                    <i className="icon--option background-image pointer" onClick={handleClick}>
                    </i>
                </div>
                <figure className="avatar">
                    <img src={avatar} alt=""/>
                </figure>
                <h1>Josué Oroya</h1>
                <p>Front End Developer Jr.</p>
            </article>
            <article class="info-slide__data">
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
            <article class="info-slide__language">
                <div class="language-box">
                    <div class="circle1 language-ingles">
                        <div class="circle2 language-ingles">
                            <div class="circulo-tapa">
                                <span class="circulo-tapa__porcentaje">50%</span>
                            </div>
                        </div>
                    </div>
                    <span class="language">ENGLISH</span>
                </div>
                <div class="language-box">
                    <div class="circle1 language-japones--derecha">
                        <div class="circle2 language-japones--izquierda">
                            <div class="circulo-tapa">
                                <span class="circulo-tapa__porcentaje">65%</span>
                            </div>
                        </div>
                    </div>
                    <span class="language">JAPANESE</span>
                </div>
            </article>
            <article class="info-slide__skill">
                <div class="skill-container">
                    <div class="skill-container__detail">
                        <span>HTML</span>
                        <span>95%</span>
                    </div>
                    <div class="progresive-bar">
                        <div class="progresive-bar__porcent bar--html"></div>
                    </div>
                </div>
                <div class="skill-container">
                    <div class="skill-container__detail">
                        <span>CSS</span>
                        <span>92%</span>
                    </div>
                    <div class="progresive-bar">
                        <div class="progresive-bar__porcent bar--css"></div>
                    </div>
                </div>
                <div class="skill-container">
                    <div class="skill-container__detail">
                        <span>JS</span>
                        <span>73%</span>
                    </div>
                    <div class="progresive-bar">
                        <div class="progresive-bar__porcent bar--js"></div>
                    </div>
                </div>
                <div class="skill-container">
                    <div class="skill-container__detail">
                        <span>React JS</span>
                        <span>67%</span>
                    </div>
                    <div class="progresive-bar">
                        <div class="progresive-bar__porcent bar--reactJS"></div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ResumeSlider
