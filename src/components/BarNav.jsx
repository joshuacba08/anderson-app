import React from 'react';
import BarNavMenu from './BarNavMenu';
import ResumeSlider from './ResumeSlider';

import './styles/BarNav.css';

const BarNav = () => {
    return (
        <header>
            <ResumeSlider />
            <BarNavMenu />
        </header>
    )
}

export default BarNav
