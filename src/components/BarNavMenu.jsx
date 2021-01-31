import React, { useState } from 'react';

import './styles/BarNavMenu.css';

const BarNavMenu = () => {

    /*Renderizado con estilos*/
    const [show, setShow] = useState();

    const handleClick = () => {
        if(!show)
            setShow('slide-menu--activo')
        else
            setShow('');
    }

    return (
        <>
        <i className="icon--menu background-image pointer" onClick={handleClick}></i>
        <div className={`slide-menu ${show}`}>
            <div className="slide-menu__bar">
                <span className="close-icon icon-config" onClick={handleClick}></span>
            </div>
            <nav className="main-menu-slide">
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="/">BLOG</a>
                    </li>
                    <li>
                        <a href="/">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default BarNavMenu
