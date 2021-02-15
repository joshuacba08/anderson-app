import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <NavLink exact to='/' activeClassName="selected" className="no-selected" onClick={handleClick}>INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName="selected" className="no-selected" onClick={handleClick}>PORTFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName="selected" className="no-selected" onClick={handleClick}>BLOG</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName="selected" className="no-selected" onClick={handleClick}>CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default BarNavMenu
