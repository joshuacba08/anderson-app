import React from 'react';

import './styles/ResumeFooter.css';
const ResumeFooter = () => {
    return (
        <article className='resume-footer'>
            <a href="https://github.com/joshuacba08" target="_blank" rel="noreferrer">
                <i className="icon icon--github background-image"></i>
            </a>
            <a href="https://codepen.io/joshuacba08-the-encoder" target="_blank" rel="noreferrer">
                <i className="icon icon--codepen background-image"></i>
            </a>
            <a href="https://www.linkedin.com/in/josue-oroya-180aa064/" target="_blank" rel="noreferrer">
                <i className="icon icon--linkedin background-image"></i>
            </a>
            <a href="https://twitter.com/joshuacba08" target="_blank" rel="noreferrer">
                <i className="icon icon--twitter background-image"></i>
            </a>
        </article>
    )
}

export default ResumeFooter
