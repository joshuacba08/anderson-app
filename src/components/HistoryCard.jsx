import React from 'react'

import './styles/HistoryCard.css';

const HistoryCard = ({name, type, since, until, description, academy}) => {
    return (
        <article className="history-card-container">
            <div className="history-card__header">
                <div className="history-card__principal">
                    <h3 className="history-card__title">{name}</h3>
                    <p className="history-card__type">{type}</p>
                </div>
                <div className="history-card__date">
                    <span>{since}-</span>
                    <span>{until}</span>
                </div> 
            </div>
            <p className="history-card__description">{description}</p>
            <span className="history-card__academy">{ academy }</span>
            <div className="mini-circle">
                <div className="mini-circle__background"></div>
            </div>
            
        </article>
    )
}

export default HistoryCard
