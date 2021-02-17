import React from 'react';
import { Link } from 'react-router-dom';
import cat from '../assets/images/404cat.gif';

import './styles/Error404.css';

const Error404 = () => {
    return (
        <div className="error-container">
            <h2>Ups, algo salió mal</h2>
            <span>-Error 404-</span>
            <div className="cat-container">
                <img src={cat} alt="gato subido a un teclado"/>
            </div>
            <Link exact to='/'>
                <span className="go-to-home">Volver a la página de inicio</span>
            </Link>
        </div>
    )
}

export default Error404
