import React from 'react';
import JosueOroya from '../assets/images/Josue_Oroya.jpg';

import './styles/AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">About Me</h2>
                <div className="about-me__card">
                    <p>Hello! I'm <strong>Anderson Oroya</strong>, a Front End Developer based in Cordoba, Argentina.<br/><br/> 
                    While I was studying engineering at the National University of Cordoba, I had my first contact with programming. Since then I have not stopped learning about different development technologies.<br /><br />
                    Here are a few technologies I've been working with recently:
                    </p>
                    <div className="about-me__technologies">
                        <div className="item">HTML & CSS</div>
                        <div className="item">JavaScript (ES6+)</div>
                        <div className="item">React JS</div>
                        <div className="item">Node.js</div>
                        <div className="item">Python</div>
                    </div>
                </div>
                <figure className="about-me__photo-profile">
                    <img src={JosueOroya} alt="profile"/>
                </figure>
            </div>
        </section>
    )
}

export default AboutMe
