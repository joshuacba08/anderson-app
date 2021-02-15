import React, { useState } from 'react'
import validator from 'validator';
import './styles/FormContact.css'

const FormContact = () => {

    //validación del formulario
    const [error, setError] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    

    return (
        <form className="form-container">
            <div className="form">
                <div className="form-control">
                    <label htmlFor="name">
                        <i className="icon icon-name"></i>
                    </label>
                    <input className="input" type="text" placeholder="Name" />
                    <small>{errMessage}</small>
                </div>
                <div className="form-control">
                    <label htmlFor="email">
                        <i className="icon icon-email"></i>
                    </label>
                    <input className="input" type="text" placeholder="Email" />
                    <small>Error message</small>
                </div>
                <div className="form-control">
                    <label className="label--message" htmlFor="message">
                        <div className="icon-container">
                            <i className="icon icon-message"></i>
                        </div>
                    </label>
                    <textarea className="input" type="text" placeholder="Message" rows="8"/>
                    <small>Error message</small>
                </div>
                <button type="submit">SEND MESSAGE</button>
            </div>
        </form >
    )
}

export default FormContact
