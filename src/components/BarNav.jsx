import React from 'react';
import ResumeSlider from './ResumeSlider';

import './styles/BarNav.css';

const BarNav = () => {
    return (
        <header>
            <ResumeSlider />
            <i className="icon--menu background-image pointer"></i>
        </header>
    )
}

export default BarNav
