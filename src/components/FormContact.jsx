import React, { useState } from 'react'
import validator from 'validator';
import useForm from '../Hooks/useForm';
import { getFirestore } from '../data/importData'
// import firebase from 'firebase/app';
import './styles/FormContact.css'
import { Link } from 'react-router-dom';

const FormContact = () => {

    //obtención de datos
    const db = getFirestore();

    //validación del formulario
    const [error, setError] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        message: '',
    });
    const { name, email, message } = formValues;
    const [state, setState] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {

            db.collection('messages').add(formValues)
                .then( () => {
                    setState(true);
                })
                .catch(e => console.log(e));

            console.log("Validado");

        } else {
            console.log("No pasó la validación");
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            setError(true);
            setErrMessage('*Your name is required');
            return false;
        } else if (!validator.isEmail(email)) {
            setError(true);
            setErrMessage('*Your email is required');
            return false;
        } else if (message.trim().length === 0) {
            setError(true);
            setErrMessage('*Your message is required');
            return false;
        }

        return true;
    }
    

    return (
        <>{
            !state ?
            <form onSubmit={handleSubmit} className="form">
                <div className="form-container">
                    {error && <small>{errMessage}</small>}
                    <div className="form-control">
                        <label htmlFor="name">
                            <i className="icon icon-name"></i>
                        </label>
                        <input 
                            className="input"
                            name="name" 
                            type="text" 
                            placeholder="Name" 
                            autoComplete="off"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">
                            <i className="icon icon-email"></i>
                        </label>
                        <input 
                            className="input" 
                            name="email"
                            type="text" 
                            placeholder="Email"
                            autoComplete="off"
                            value={email}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label--message" htmlFor="message">
                            <div className="icon-container">
                                <i className="icon icon-message"></i>
                            </div>
                        </label>
                        <textarea 
                            className="input" 
                            name="message"
                            type="text" 
                            placeholder="Message" 
                            rows="8"
                            autoComplete="off"
                            value={message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">SEND MESSAGE</button>
                </div>
            </form > :
            <div className="confirm-contact-container">
                    <p className="message-confirm">Muchas gracias por dejar un mensaje 😊 te estaré respondiendo lo más antes posible. </p>
                <Link exact to='/'>
                    <span className="go-to-home">Volver a la página de inicio</span>
                </Link>
            </div>
        }</>
    )
}

export default FormContact
